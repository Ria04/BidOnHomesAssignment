import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../actions/userActions";

const RegisterScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const checkLogin = (e) => {
    e.preventDefault();

    const result = users.filter(
      (user) => user.email.toLowerCase() == email.toLowerCase()
    );
    if (result.length > 0) {
      setFlag(true);
    } else {
      dispatch(
        addUser([...users, { name: name, email: email, password: password }])
      );
      history.push("/home");
    }
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <h2>Welcome!!!</h2>
        </HeaderContainer>
      </Header>
      <Container>
        <ProductForm>
          <h1>Register</h1>
          {flag && (
            <h3 style={{ color: "red", textAlign: "center" }}>
              User Already Exist
            </h3>
          )}
          <form onSubmit={checkLogin}>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Register</button>
          </form>
        </ProductForm>
      </Container>
    </>
  );
};

export default RegisterScreen;

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
