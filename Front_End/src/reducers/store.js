import { createStore, combineReducers } from "redux";

import Subjects from "./subjects/Subjects";
import User from "./User/User";

const reducers = combineReducers({Subjects,User});
const store = createStore(reducers);

export default store;