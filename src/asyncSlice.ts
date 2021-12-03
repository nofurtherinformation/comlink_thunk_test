import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as Comlink from 'comlink'
//@ts-ignore
import MyWorker from './worker.worker'

console.log("My worker is ",MyWorker)
const test = new MyWorker()



interface State{
  list:Array<string>,
  state: "PENDING" | "DONE" | "NONE"
}

const initialState:State= {
  list:[],
  state:"NONE" 
}

export const addToList = createAsyncThunk('addToList', async (item:string, thunkAPI)=>{
  const ts = await new test.TestClass()
  return ts.addToList(item);
})

const  slice =  createSlice({
  name:"test",
  initialState,
  reducers:{},

  extraReducers:(builder)=>{
      builder.addCase(addToList.pending, (state,action)=>{
        state.state ="PENDING" 
      })
      builder.addCase(addToList.fulfilled, (state,action)=>{
        state.state= "DONE"
        state.list =action.payload  
      })
  }
})

export const reducer = slice.reducer
