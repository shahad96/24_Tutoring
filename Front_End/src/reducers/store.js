import { createStore, combineReducers } from "redux";

import Subjects from "./subjects/Subjects";


const reducers = combineReducers({Subjects});
const store = createStore(reducers);

export default store;