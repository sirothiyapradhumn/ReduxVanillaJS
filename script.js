import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import cartItemReducer, {
  cartAddItem,
  cartRemoveItem,
  decItemQuantity,
  incItemQuantity,
} from "./reducers/cartItemReducer";
import wishReducer, {
  wishCartAddItem,
  wishCartRemoveItem,
} from "./reducers/wishReducer";

const reducer = combineReducers({
  products: productReducer,
  cartItem: cartItemReducer,
  wishList: wishReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(cartAddItem(1));
store.dispatch(cartAddItem(6));
store.dispatch(cartAddItem(11));
store.dispatch(cartAddItem(20));
store.dispatch(cartRemoveItem(6));

store.dispatch(incItemQuantity(20));
store.dispatch(incItemQuantity(20));

store.dispatch(decItemQuantity(20));
store.dispatch(decItemQuantity(20));
store.dispatch(decItemQuantity(20));

store.dispatch(wishCartAddItem(1));
store.dispatch(wishCartAddItem(6));
store.dispatch(wishCartAddItem(11));
store.dispatch(wishCartRemoveItem(6));
