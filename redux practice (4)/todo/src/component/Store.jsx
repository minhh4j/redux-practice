import {configureStore} from "@reduxjs/toolkit"
import ReducerTodo from "./CreateSlice";

const store = configureStore({
    reducer:{
        todos:ReducerTodo,
    },
})

export default store ;