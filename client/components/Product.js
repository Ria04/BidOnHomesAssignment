import React from "react";
import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <ProductCard>
      <ImageContainer>
        <img src={require("./product.jpeg")} />
      </ImageContainer>
      <h2>{product.name}</h2>
      <h3>
        price :<span> $ {product.price}</span>
      </h3>
      <h3>Qty : {product.countInStock}</h3>
      <p>{product.description}</p>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled.div`
  padding: 0.5rem;
  border: 1px solid black;
  margin: 0rem 0.56rem;
  @media (min-width: 1200px) {
    width: 22%;
  }
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

  > h3 {
    > span {
      color: #423f3f;

      font-size: 1rem;
    }
  }
  > p {
    color: grey;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
