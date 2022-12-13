import React from "react";
import { Container, Row } from "rsuite";
import Cards from "../Components/Cards";
import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  //console.log(products);
  return (
    <>
      <Container>
        <Row>
          {products.map((prod) => {
            return <Cards key={prod.id} prod={prod} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
