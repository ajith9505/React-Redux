import rootReducer from "./reducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;