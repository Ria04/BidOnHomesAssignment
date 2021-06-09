import React, { useState } from "react";
import styled from "styled-components";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState(" ");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/home");
    }
  };
  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
        />
        <button type="submit">Search</button>
      </form>
    </FormContainer>
  );
};

export default SearchBox;

const FormContainer = styled.div`
  > form {
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }

    > input {
      padding: 0.7rem 1rem;
      outline: none;
    }
    > button {
      background-color: #f9c21e;
      color: black;
      border: 1px solid #f9c21e;
      outline: none;
    }
  }
`;
