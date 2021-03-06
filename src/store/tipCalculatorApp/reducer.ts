import { Reducer } from 'redux'
import { ActionTypes, CALCULATOR_ACTIONS } from './types'

export const initialState: State = {
  billAmount: 0,
  peopleAmount: 0,
  tipAmount: 0,
  totalAmount: 0,
}

type State = {
  billAmount: number
  peopleAmount: number
  tipAmount: number
  totalAmount: number
}

export const tipCalculatorApp: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATOR_ACTIONS.SET_BILL_AMOUNT: {
      return {
        ...state,
        billAmount: action.billAmount,
      }
    }
    case CALCULATOR_ACTIONS.SET_TIP_AMOUNT: {
      return {
        ...state,
        tipAmount: action.tipAmount,
      }
    }
    case CALCULATOR_ACTIONS.SET_PEOPLE_AMOUNT: {
      return {
        ...state,
        peopleAmount: action.peopleAmount,
      }
    }
    case CALCULATOR_ACTIONS.SET_TOTAL_AMOUNT: {
      return {
        ...state,
        totalAmount: action.totalAmount,
      }
    }
    case CALCULATOR_ACTIONS.RESET: {
      return {
        billAmount: action.billAmount,
        peopleAmount: action.peopleAmount,
        tipAmount: action.tipAmount,
        totalAmount: action.totalAmount,
      }
    }
    default:
      return state
  }
}
