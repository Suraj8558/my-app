import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/src/store/feature/counter/counterSlice";
import usersReducer from "@/src/store/feature/users/usersSlice";


export const makeStore = () => {
  return configureStore ({
    reducer: {
      counter:  counterReducer,
      users: usersReducer
    },
  })
}


export type  AppStore = ReturnType<typeof makeStore> 
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']