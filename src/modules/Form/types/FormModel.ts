import { TFormConfig, TFormConfigControls } from '@/modules/Form/types/TFormConfig'
import { TFormControlValuesObject } from '@/modules/Form/types/TFormControlValuesObject'
import { TFormModel } from '@/modules/Form/types/TFormModel'
import { IFormControlConfig } from '@/modules/Form/types/IFormControlConfig'
import { IFormControlModel } from '@/modules/Form/types/IFormControlModel'
import { ControlModel } from '@/modules/Form/types/ControlModel'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'

export type TControls<T extends string | number | symbol = string, K extends TFormControlValues = TFormControlValues> = Record<T, ControlModel<K>>

export class FormModel<T extends TFormControlValuesObject = Record<string, TFormControlValues>, K extends keyof T = keyof T> {
  controls: TControls<K, T[K]> = {} as TControls<K, T[K]>

  constructor (config: TFormConfig<T, K>) {
    this.initControls(config.controls)
  }

  get value (): T {
    const mas = Object.entries(this.controls) as [K, IFormControlModel<T[K]>][]
    const res: T = {} as T
    for (let i = 0; i < mas.length; i++) {
      const [key, model] = mas[i]
      res[key] = model.value
    }
    return res
  }

  private initControls (controls: TFormConfigControls<T, K>): void {
    const mas = Object.entries(controls) as [K, IFormControlConfig<T[K]>][]
    const res: TControls<K, T[K]> = {} as TControls<K, T[K]>
    for (let i = 0; i < mas.length; i++) {
      const key = mas[i][0]
      res[key] = new ControlModel(controls[key], this.controls)
      this.controls[key] = res[key]
    }
  }
}
