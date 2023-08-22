import React from "react";
import { Row, Col } from "react-bootstrap";
import { productArray } from "../productStore";
import ProductCard from "../components/ProductCard";

const Cancel = () => {
  return (
    <>
      <h1 align="center">Welcome To Store</h1>
      <Row xs={1} md={3} className="g-4">
        {productArray.map((product) => (
          <Col align="center">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cancel;
