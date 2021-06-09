import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Link,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Product from "../components/Product";
import SearchBox from "../components/SearchBox";

const HomeScreen = ({ match }) => {
  const history = useHistory();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const keyword = match.params.keyword;

  if (keyword) {
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.price.toString().includes(keyword.toLowerCase())
    );
    var allProducts = result;
  } else {
    var allProducts = products;
  }

  const logout = () => {
    history.push("/");
  };

  return (
    <ParentContainer>
      <Header>
        <HeaderContainer>
          <h2>Welcome!!!</h2>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <h2 className="logout" onClick={logout}>
            Logout
          </h2>
        </HeaderContainer>
      </Header>
      <Container>
        <Link to="/addProduct">
          <button className="addButton">Add Products</button>
        </Link>
      </Container>

      <ProductContainer>
        <Container>
          {allProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </Container>
      </ProductContainer>
    </ParentContainer>
  );
};

export default HomeScreen;

const ProductContainer = styled.div`
  width: 100%;
`;
const ParentContainer = styled.div``;

const Container = styled.div`
  max-width: 1200px;
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
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
