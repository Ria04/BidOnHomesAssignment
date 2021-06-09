import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  localStorage.removeItem("currentuser");

  const checkLogin = (e) => {
    e.preventDefault();
    const result = users.filter(
      (user) =>
        user.email.toLowerCase() == email.toLowerCase() &&
        user.password == password
    );
    if (result.length > 0) {
      localStorage.setItem("currentuser", result[0].name);
      history.push("/home");
    } else {
      setFlag(true);
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
          <h1>Login</h1>
          {flag && (
            <h3 style={{ color: "red", textAlign: "center" }}>
              Invalid username or password
            </h3>
          )}
          <form onSubmit={checkLogin}>
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
            <button type="submit">Login</button>{" "}
            <h4 style={{ textAlign: "center" }}>
              <Link to="/register">Not Registered?</Link>
            </h4>
          </form>
        </ProductForm>
      </Container>
    </>
  );
};

export default LoginScreen;

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
