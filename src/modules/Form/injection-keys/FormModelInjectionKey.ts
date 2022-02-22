import { InjectionKey } from 'vue'
import { FormModel } from '@/modules/Form/types/FormModel'

export const FORM_MODEL: InjectionKey<FormModel> = Symbol('FORM_MODEL')
