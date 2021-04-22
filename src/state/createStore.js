import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  return state
}

const initialState = {}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore