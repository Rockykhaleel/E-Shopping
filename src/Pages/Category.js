import React from "react";
import { Container, Row, Col, Checkbox } from "rsuite";
import Cards from "../Components/Cards";
import { CartState } from "../context/Context";

const Category = () => {
  const {
    state: { products },
    productState,
    productDispatch,
    productState: { mobile, laptop, pad },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (mobile) {
      sortedProducts = sortedProducts.filter((prod) => prod.mobile);
    }
    if (laptop) {
      sortedProducts = sortedProducts.filter((prod) => prod.laptop);
    }
    if (pad) {
      sortedProducts = sortedProducts.filter((prod) => prod.pad);
    }
    return sortedProducts;
  };

  console.log(productState);
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col md={6} sm={12}>
            <h2>Filters</h2>
          </Col>
          <Col md={6} sm={12}>
            <Checkbox
              onChange={() =>
                productDispatch({
                  type: "Sort_By_Mobile",
                })
              }
            >
              <h2>Mobile</h2>
            </Checkbox>
          </Col>
          <Col md={6} sm={12}>
            <Checkbox
              onChange={() =>
                productDispatch({
                  type: "Sort_By_Laptop",
                })
              }
            >
              <h2>Laptop</h2>
            </Checkbox>
          </Col>
          <Col md={6} sm={12}>
            <Checkbox
              onChange={() =>
                productDispatch({
                  type: "Sort_By_Pad",
                })
              }
            >
              <h2>Pad</h2>
            </Checkbox>
          </Col>
        </Row>
        <br />
        <Row>
          {transformProducts().map((prod) => {
            return <Cards key={prod.id} prod={prod} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Category;
