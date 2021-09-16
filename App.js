import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ShopNavigation from "./src/navigation/ShopNavigation";
import productsReducer from './src/store/reducers/products';
import cartReducer from'./src/store/reducers/cart'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer= combineReducers({
  products: productsReducer,
  cart: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default function App() {
  return (
    <Provider store={store} >
<ShopNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
