import {createSlice,createSelector} from '@reduxjs/toolkit'
const CartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addItems:(data,action) =>{
            data.push(action.payload)
        }
    }

});
export const getItemsSelector=createSelector(
    (state)=>state.Cart,
    (state)=>state
);
export const {addItems} =CartSlice.actions;
export default CartSlice.reducer;