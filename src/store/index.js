import { configureStore, createSlice } from "@reduxjs/toolkit";

const savedOrder = JSON.parse(window.localStorage.getItem("tempOrder"));

//cartInitialState based on local storage
let cartInitialState = {
  items: savedOrder ? savedOrder.items : [],
  totalPrice: savedOrder ? savedOrder.totalPrice : 0,
  totalQty: savedOrder ? savedOrder.totalQty : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      const updatedTotalPrice = state.totalPrice + action.payload.price;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.items[existingItemIndex]; //object item

      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      const newTotalQty = state.totalQty + 1;

      window.localStorage.setItem(
        "tempOrder",
        JSON.stringify({
          items: updatedItems,
          totalPrice: updatedTotalPrice,
          totalQty: newTotalQty,
        })
      );

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalQty: newTotalQty,
      };
    },

    removeFromCart(state, action) {
      const updatedTotalPrice = state.totalPrice - action.payload.price;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.items[existingItemIndex]; //object item
      console.log(existingItem.qty);
      let updatedItems;

      if (existingItem.qty === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty - 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      const newTotalQty = state.totalQty - 1;
      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalQty: newTotalQty,
      };
    },

    deleteFromCart(state, action) {
      let updatedItems;
      let newTotalQty;
      let newTotalPrice;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.items[existingItemIndex];

      console.log(existingItem);
      updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      if (state.totalQty === 1) {
        newTotalQty = 0;
        newTotalPrice = 0;
      } else {
        newTotalQty = state.totalQty - existingItem.qty;
        newTotalPrice =
          state.totalPrice - existingItem.qty * existingItem.price;
      }

      return {
        items: updatedItems,
        totalPrice: newTotalPrice,
        totalQty: newTotalQty,
      };
    },

    clearCart() {
      window.localStorage.removeItem("tempOrder");
      return cartInitialState;
    },

    //fetching order from localstorage
    fetchLocalOrder(state, action) {
      console.log(action.payload);
      return {
        items: action.payload.items,
        totalPrice: action.payload.totalPrice,
        totalQty: action.payload.totalQty,
      };
    },
  },
});

let authInitialState = {
  isLoggedIn: false,
  token: window.localStorage.getItem("token") ? true : false, //not sure if right
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
      window.localStorage.clear();
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, auth: authSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const authActions = authSlice.actions;

export default store;
