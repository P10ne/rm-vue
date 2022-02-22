import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'
import { IFormControlModel } from '@/modules/Form/types/IFormControlModel'
import { TFormControlError } from '@/modules/Form/types/TFormControlError'
import { IFormControlConfig } from '@/modules/Form/types/IFormControlConfig'
import { TControlValidator } from '@/modules/Form/types/TControlValidator'
import { TControlAsyncValidator } from '@/modules/Form/types/TControlAsyncValidator'
import { TFormValidationError } from '@/modules/Form/types/TFormValidationError'
import { TFormConfigControls } from '@/modules/Form/types/TFormConfig'
import { TControls } from '@/modules/Form/types/FormModel'

type TErrors = Record<string, true>
type TValue<T> = T | null

export class ControlModel<T extends TFormControlValues> {
  private _validators: TControlValidator[] = []
  private _asyncValidators: TControlAsyncValidator[] = []
  private _controls: TControls = {}

  private _isDisabled = false;
  get isDisabled (): boolean {
    return this._isDisabled
  }

  setDisabled (value: boolean): void {
    this._isDisabled = value
  }

  private _errors: TErrors = {};
  get errors (): TErrors {
    return this._errors
  }

  setErrors (errors: TErrors): void {
    this._errors = errors
  }

  private _isTouched = false;
  get isTouched (): boolean {
    return this._isTouched
  }

  setTouched (value: boolean): void {
    this._isTouched = value
    this.validate(this._value)
  }

  private _value: TValue<T> = null;
  get value (): TValue<T> {
    return this._value
  }

  setValue (value: TValue<T>): void {
    this._value = value
    this.validate(value)
  }

  private _isPending = false;
  get isPending (): boolean {
    return this._isPending
  }

  setPending (value: boolean): void {
    this._isPending = value
  }

  constructor (controlConfig: IFormControlConfig<T>, controls: TControls<string, TFormControlValues>) {
    this._controls = controls
    const { defaultValue, disabled, validators } = controlConfig
    this.setValue(this.isValueDefined(defaultValue) ? defaultValue : null)
    this.setDisabled(disabled || false)
    this._validators = (validators && validators[0]) || []
    this._asyncValidators = (validators && validators[1]) || []
  }

  private isValueDefined (value: TValue<T>): boolean {
    return !!value || value === '' || value === 0
  }

  private async validate (newValue: TValue<T>): Promise<void> {
    console.log('controls: ', this._controls)
    this.clearErrors()
    if (this._validators.length > 0) {
      for (let i = 0; i < this._validators.length; i++) {
        const validationError = this._validators[i](newValue, this._controls)
        if (!validationError) continue
        this.setErrors({ [validationError]: true })
        break
      }
    }
    if (Object.keys(this.errors).length > 0) return
    if (this._asyncValidators.length > 0) {
      this.setPending(true)
      for (let i = 0; i < this._asyncValidators.length; i++) {
        const validationError = await this._asyncValidators[i](newValue, this._controls)
        if (!validationError) continue
        this.setErrors({ [validationError]: true })
        break
      }
      this.setPending(false)
    }
  }

  private clearErrors (): void {
    this._errors = {}
  }
}
