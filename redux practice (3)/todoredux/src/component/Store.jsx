import { configureStore } from "@reduxjs/toolkit";
import todoreduser from "./CreateTodo";

export const store = configureStore({
    reducer:{
        todos:todoreduser
    }
})