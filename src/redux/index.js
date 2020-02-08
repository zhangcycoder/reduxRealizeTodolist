import { createStore, combineReducers } from 'redux';
import Todoist from './TodoReducer.js'

const routerReducer = combineReducers({
    Todoist
})

const initaliState = {}

const store = createStore(routerReducer,initaliState)
export default store