import { Dispatch, GetState } from '../types'
import { ActionTypes, CALCULATOR_ACTIONS } from './types'

export const SetBillAmount = (newAmount: number) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALCULATOR_ACTIONS.SET_BILL_AMOUNT,
    billAmount: newAmount,
  })
}

export const SetPeopleAmount = (newPeopleAmount: number) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALCULATOR_ACTIONS.SET_PEOPLE_AMOUNT,
    peopleAmount: newPeopleAmount,
  })
}

export const SetTipAmount = (percentage: number) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { billAmount, peopleAmount } = getState().tipCalculatorApp
  const newTipAmount = (percentage / 100) * (billAmount / (peopleAmount <= 0 ? 1 : peopleAmount))
  dispatch({
    type: CALCULATOR_ACTIONS.SET_TIP_AMOUNT,
    tipAmount: newTipAmount,
  })
}

export const Reset = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALCULATOR_ACTIONS.RESET,
    billAmount: 0,
    peopleAmount: 0,
    tipAmount: 0,
    totalAmount: 0,
  })
}
