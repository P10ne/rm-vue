import { computed, inject, ref, Ref, toRefs } from 'vue'
import { FORM_MODEL } from '@/modules/Form/injection-keys/FormModelInjectionKey'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'
import { ControlModel } from '@/modules/Form/types/ControlModel'
import { FORM_CONTROL_NAME } from '@/modules/Form/injection-keys/FormControlNameInjectionKey'

type TFormControlParameters<T extends TFormControlValues> = {
  controlName?: string;
}

type TFormControlFns<T extends TFormControlValues> = {
  isControlDisabled: Ref<boolean>;
  controlValue: Ref<T | null>;
  controlHasError: Ref<boolean>;
  isControlTouched: Ref<boolean>;
  setControlDisabled: (isDisabled: boolean) => void
  setControlValue: (value: T | null) => void
  setControlTouched: (isTouched: boolean) => void
}

export default function useFormControl<T extends TFormControlValues> ({
  controlName
}: TFormControlParameters<T> = {}): TFormControlFns<T> {
  const formModel = inject(FORM_MODEL)
  const ctrlName = controlName || inject(FORM_CONTROL_NAME)

  let control: ControlModel<T> | null = null

  if (formModel && ctrlName) {
    control = formModel.controls[ctrlName] as ControlModel<T>
    if (!control) {
      throw new Error(`${ctrlName} was not found in formModel`)
    }
  }

  const isDisabled = computed(() => (control && control.isDisabled) || false)
  const value = computed(() => (control && control.value) || null)
  const hasError = computed(() => (control && Object.keys(control.errors).length > 0) || false)
  const isTouched = computed(() => (control && control.isTouched) || false)

  return {
    isControlDisabled: isDisabled,
    controlValue: value,
    controlHasError: hasError,
    isControlTouched: isTouched,
    setControlDisabled: isDisabled => control?.setDisabled(isDisabled),
    setControlValue: value => control?.setValue(value),
    setControlTouched: isTouched => control?.setTouched(isTouched)
  }
}
