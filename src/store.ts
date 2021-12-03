import {configureStore} from "@reduxjs/toolkit"
import {reducer} from "./asyncSlice"
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const store = configureStore({
  reducer:{
    test: reducer,
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector

