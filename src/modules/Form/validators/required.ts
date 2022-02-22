import { TControlValidator } from '../types/TControlValidator'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'

export const required: TControlValidator = (v: TFormControlValues) => {
  return v ? null : 'required'
}
