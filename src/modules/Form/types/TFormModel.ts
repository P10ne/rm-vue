import { IFormControlModel } from './IFormControlModel'
import { TFormControlValuesObject } from './TFormControlValuesObject'

export type TFormModel<T extends TFormControlValuesObject, K extends keyof T = keyof T> = Record<K, IFormControlModel<T[K]>>
