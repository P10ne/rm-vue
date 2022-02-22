import { TFormControlValues } from './TFormControlValues'
import { TFormValidationError } from './TFormValidationError'
import { ControlModel } from '@/modules/Form/types/ControlModel'
import { TControls } from '@/modules/Form/types/FormModel'

export type TControlAsyncValidator = (v: TFormControlValues, controls: TControls) => Promise<null | TFormValidationError>
