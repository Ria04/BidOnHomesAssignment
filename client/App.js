import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import AddProductScreen from "./screens/AddProductScreen";
import "./reset.css";
import HomeScreen from "./screens/HomeScreen";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  const history = useHistory();

  return (
    <>
      <Router>
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/addProduct" component={AddProductScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
      </Router>
    </>
  );
};

export default App;

const Header = styled.div`
  padding: 1.5rem 1rem;
  background-color: black;
`;
const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > h2 {
    color: #f9c21e;
  }
  > h1 {
    color: #f9c21e;
  }
`;
