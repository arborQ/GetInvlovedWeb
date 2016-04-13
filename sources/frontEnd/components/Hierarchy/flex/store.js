import { createStore } from 'redux'
import hierarchyReducer from './reducer'
let store = createStore(hierarchyReducer)

export default store;
