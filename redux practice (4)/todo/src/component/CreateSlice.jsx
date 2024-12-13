import {createSlice} from "@reduxjs/toolkit"


const ToDoSlice = createSlice({
    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state,action) => {
            state.value.push(action.payload)
        },
        editTodo:(state,action) => {

            const{id,text}=action.payload;

            state.value[id]=text;
            
         
        }
        
    }
})

export const {addTodo,editTodo} = ToDoSlice.actions;
export default ToDoSlice.reducer;