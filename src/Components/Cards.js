import React from "react";
import { Col, Panel } from "rsuite";
import { CartState } from "../context/Context";

const Cards = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  //console.log("This is in cart" + cart);
  return (
    <>
      <Col md={6} sm={12}>
        <Panel
          shaded
          bordered
          bodyFill
          style={{ display: "inline-block", width: 240 }}
        >
          <img src={prod.img} height="240" alt="404" />
          <Panel header={prod.title}>
            <p>
              Description : <small>{prod.description}</small>
            </p>
            <p>
              <big>Price : {prod.price}</big>
            </p>
            <br />
            {cart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "Remove_From_Cart",
                    payload: prod,
                  });
                }}
                className="btn btn-danger"
              >
                Remove From cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: "Add_To_Cart",
                    payload: prod,
                  });
                }}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            )}
          </Panel>
        </Panel>
      </Col>
    </>
  );
};

export default Cards;
