import { createStore, combineReducers } from "redux";

import Subjects from "./subjects/Subjects";
import User from "./User/User";
import Offers from "./offers/Offers";

const reducers = combineReducers({Subjects,User,Offers});
const store = createStore(reducers);

export default store;