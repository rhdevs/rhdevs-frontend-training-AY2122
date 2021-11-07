import { Dispatch, GetState } from '../types'
import { ActionTypes, CALCULATOR_ACTIONS } from './types'

export const setBillAmount = (newAmount: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALCULATOR_ACTIONS.SET_BILL_AMOUNT,
    billAmount: newAmount,
  })
}

export const setPeopleAmount = (newPeopleAmount: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALCULATOR_ACTIONS.SET_PEOPLE_AMOUNT,
    peopleAmount: newPeopleAmount,
  })
}

export const setTipAmount = (percentage: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { billAmount, peopleAmount } = getState().tipCalculatorApp
  const newTipAmount = (percentage / 100) * (billAmount / (peopleAmount <= 0 ? 1 : peopleAmount))
  dispatch({
    type: CALCULATOR_ACTIONS.SET_TIP_AMOUNT,
    tipAmount: newTipAmount,
  })
}

export const setTotalAmount = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { billAmount, peopleAmount, tipAmount } = getState().tipCalculatorApp
  const newTotalAmount = billAmount / (peopleAmount <= 0 ? 1 : peopleAmount) + tipAmount
  dispatch({
    type: CALCULATOR_ACTIONS.SET_TOTAL_AMOUNT,
    totalAmount: newTotalAmount,
  })
}

export const Reset = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALCULATOR_ACTIONS.RESET,
    billAmount: 0,
    peopleAmount: 0,
    tipAmount: 0,
    totalAmount: 0,
  })
}
