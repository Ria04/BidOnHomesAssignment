import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers } from "./reducers/productReducers";
import { userListReducers } from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducers,
  userList: userListReducers,
});

const initialProducts = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "./product.jpeg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    price: 89.99,
    countInStock: 10,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "../public/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    price: 599.99,
    countInStock: 7,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "../public/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    price: 929.99,
    countInStock: 5,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image: "../public/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",

    price: 399.99,
    countInStock: 11,
  },
];

const initialUsers = [];

const products = JSON.parse(localStorage.getItem("products"));
const users = JSON.parse(localStorage.getItem("users"));

const initialState = {
  productList: {
    products: products ? products : initialProducts,
  },
  userList: {
    users: users ? users : initialUsers,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
