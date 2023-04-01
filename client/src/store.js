import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux"
import Thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { eventReducers } from "./reducers/event";

const reducers = combineReducers({
   event:eventReducers
})
const middleware = [Thunk];

const Store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export default Store;