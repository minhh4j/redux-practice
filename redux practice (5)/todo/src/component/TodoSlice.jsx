import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todos",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state , action) => {
            console.log(action);
            let text =action.payload
            state.value.push({text,color:"green"})
        },
        deleteTodo:(state , action) => {
           state.value = state.value.filter((_,index) => index != action.payload)
        },
        addColor:(state,action) => {
            let {index , color} = action.payload
            state.value[index].color=color
        }
    }
})

export const {addTodo , deleteTodo ,addColor } = todoSlice.actions;
export default todoSlice.reducer;