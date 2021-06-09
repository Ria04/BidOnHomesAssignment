import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import SearchBox from "../components/SearchBox";

const AddProductScreen = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const addProduct = () => {
    const product = {
      name: name,
      image: "../public/images/airpods.jpg",
      description: description,
      price: price,
      countInStock: inStock,
    };
    dispatch(listProducts([...products, product]));
    history.push("/home");
  };
  const logout = () => {
    history.push("/");
  };
  return (
    <>
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
        <Link to="/">
          <h2>Go Back</h2>
        </Link>
        <ProductForm>
          <h1>Add Product Details</h1>
          <form onSubmit={addProduct}>
            <input
              type="text"
              placeholder="Enter Product Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter InStock value"
              onChange={(e) => setInStock(e.target.value)}
            />
            <button type="submit">Add Product</button>
          </form>
        </ProductForm>
      </Container>
    </>
  );
};

export default AddProductScreen;

const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  > form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0rem auto;
    > input {
      padding: 0.7rem 1rem;
      margin-bottom: 1rem;
    }
  }
  > h1 {
    text-align: center;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0rem auto;
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
