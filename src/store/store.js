import { createStore,  combineReducers } from "redux";
import worksReducer from "./reducers/works.reducer";
import interiorsReducer from "./reducers/interior.reducer";
import orderReducer from "./reducers/order.reducer";

const reducers = {
    works: worksReducer,
    interiors: interiorsReducer,
    orders: orderReducer
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;