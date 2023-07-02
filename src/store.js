import { configureStore } from "@reduxjs/toolkit";
import Taskslice from "./reducers/Taskslice";

export const store= configureStore({
    reducer:{tasks:Taskslice}
})