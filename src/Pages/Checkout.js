import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState(cartFromLocalStorage);

  const [total, setTotal] = useState();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);

  return (
    <div>
      <ListGroup>
        {cart.map((prod) => (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
                <Image src={prod.img} alt={prod.title} fluid rounded />
              </Col>
              <Col md={2}>
                <span>{prod.title}</span>
              </Col>
              <Col md={2}>₹ {prod.price}</Col>
              <Col md={2}>
                <Form.Control
                  as="select"
                  value={prod.quantity}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        quantity: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(5).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
                  onClick={() =>
                    dispatch({
                      type: "Remove_From_Cart",
                      payload: prod,
                    })
                  }
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div>
        <span>Subtotal ({cart.length}) items</span>
        <span>Total : {total}</span>
        <button className="btn btn-success" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
