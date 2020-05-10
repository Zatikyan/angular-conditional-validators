import { andCondition } from './validators/and'
import { orCondition } from './validators/or';

export namespace ConditionalValidators {
  export const and = andCondition;
  export const or = orCondition;
}
