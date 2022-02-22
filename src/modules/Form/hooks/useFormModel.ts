import { IFormControlConfig } from '@/modules/Form/types/IFormControlConfig'
import { TFormControlValuesObject } from '@/modules/Form/types/TFormControlValuesObject'
import { TFormModel } from '@/modules/Form/types/TFormModel'
import { FormModel } from '@/modules/Form/types/FormModel'
import { TFormConfig } from '@/modules/Form/types/TFormConfig'

export default function useFormModel
  <
    T extends TFormControlValuesObject,
    K extends keyof T = keyof T
  >
(
  config: TFormConfig<T, K>
): FormModel<T> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new FormModel<T>(config)
}
