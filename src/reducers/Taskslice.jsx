import tasksData from '../data/tasks.json'
import { createSlice } from '@reduxjs/toolkit'
const initialState=[...tasksData]//using data as tas data

export const Taskslice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTasks: (action)=>{ //this is a reducer it will expect an action with payload property
            //it will return payload value
            return action.payload
        },
        addTask:(state,action)=>{
            return [...state,action.payload]
        },
        deleteTask:(state,action)=>{
            return state.filter(task=>task.id!==action.payload)
        },
        updateTask:(state,action)=>{
            return state.map(task=>task.id===action.payload.id?{...task,...action.payload}:task)
        },
    }
})

export const{addTasks,addTask,deleteTask,updateTask}=Taskslice.actions;
export default Taskslice.reducer