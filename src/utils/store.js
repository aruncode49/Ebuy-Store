import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  // slices --> cartSlice
  reducer: {
    cart: cartSlice,
  },
});

export default store;

// TODO lIST For Working In Redux Toolkit 🥲
/*
  1. Create Store
        - configureStore() -> import from RTK
        
  2. Provide my store to app
        - <Provider store={store}> -> import from react-redux

  3. Slice
        - createSlice({  -> import from RTK
              name : '',
              initialState: {items : []},
              reducers : {
                addItem: (state, action) => {state...You can directly modify it.}
              }
          })

      export const {addItem, removeItem, ..} = createSlice.actions;
      export default cartSlice.reducer;

  4. Put that slice into store
        - {
            reducer: {
              cart : cartSlice,
              user : userSlice,
              ...
            }
          }

  5. Subscribe the data. (useSelector Hook)
        - {
          const cartItem = useSelector(store => store.cart.items)
        }
        <span className="cart-count">Cart Count: {cartItem.length}</span>

  6. Dispatch an action
        const dispatch = useDispatch(); --> import from react-redux

        const handleAddItem = () => {   addItem --> import from utils/cartSlice
          dispatch(addItem("Grapes"));
        };

        <button onClick={handleAddItem} className="product-btn">
            Add to Cart
        </button>
 */
