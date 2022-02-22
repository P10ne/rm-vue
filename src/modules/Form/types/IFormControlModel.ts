import { TFormControlError } from './TFormControlError'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'

export interface IFormControlModel<T extends TFormControlValues> {
  errors: TFormControlError[];
  value: T;
  disabled: boolean;
  touched: boolean;
}
