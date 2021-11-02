/** Types */

/** Actions' types */
export enum CALCULATOR_ACTIONS {
  SET_BILL_AMOUNT = 'CALCULATOR_ACTIONS.SET_BILL_AMOUNT',
  SET_TIP_AMOUNT = 'CALCULATOR_ACTIONS.SET_TIP_AMOUNT',
  SET_PEOPLE_AMOUNT = 'CALCULATOR_ACTIONS.SET_PEOPLE_AMOUNT',
  RESET = 'CALCULATOR_ACTIONS.RESET',
}

/** Actions */
type SetBillAmount = {
  type: typeof CALCULATOR_ACTIONS.SET_BILL_AMOUNT
  billAmount: number
}

type SetTipAmount = {
  type: typeof CALCULATOR_ACTIONS.SET_TIP_AMOUNT
  tipAmount: number
}

type SetPeopleAmount = {
  type: typeof CALCULATOR_ACTIONS.SET_PEOPLE_AMOUNT
  peopleAmount: number
}

type Reset = {
  type: typeof CALCULATOR_ACTIONS.RESET
  billAmount: number
  peopleAmount: number
  tipAmount: number
  totalAmount: number
}

export type ActionTypes = SetBillAmount | SetTipAmount | SetPeopleAmount | Reset
