import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './slice/CartSlice'
export const ReduxStore=configureStore({
  reducer:{
      Cart:CartSlice
  }
});
