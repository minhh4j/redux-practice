import {createSlice} from "@reduxjs/toolkit"


const todoSlice = createSlice({
    name:"todos",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state , action) => {
            state.value.push({id:Date.now() , text:action.payload});
        }
        
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;