import { TFormControlValues } from './TFormControlValues'
import { IFormControlConfig } from './IFormControlConfig'

export type TFormConfigControls<T extends Record<string, TFormControlValues>, K extends keyof T = keyof T> = Record<K, IFormControlConfig<T[K]>>

export type TFormConfig<T extends Record<string, TFormControlValues>, K extends keyof T = keyof T> = {
  controls: TFormConfigControls<T, K>;
}
