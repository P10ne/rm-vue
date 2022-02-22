import { TFormControlValues } from './TFormControlValues'
import { TControlValidator } from './TControlValidator'
import { TControlAsyncValidator } from './TControlAsyncValidator'

export interface IFormControlConfig<T extends TFormControlValues> {
  defaultValue: T | null;
  validators?: [validators: TControlValidator[], asyncValidators: TControlAsyncValidator[]]
  disabled?: boolean;
}
