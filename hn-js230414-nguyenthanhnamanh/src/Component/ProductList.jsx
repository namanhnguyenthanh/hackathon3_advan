import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductList.css";

function ProductList(props) {
  const { product } = props;
  if (!product) return null;
  const { price, descripstion, status, image_url, id } = product;

  return (
    <Col lg={3} md={4} sm={6} className="my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{descripstion}</Card.Text>
          <p className="Price" style={{ fontWeight: "bold" }}>
            {price}
          </p>
          <div className="d-flex justify-content-between">
            <input type="number" placeholder="1" style={{ width: "50px" }} />

            <Button variant="primary">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductList;
