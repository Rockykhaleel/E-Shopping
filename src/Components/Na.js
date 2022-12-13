import { Container, Header } from "rsuite";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Na = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <div className="show-container">
        <Container>
          <Header>
            <Navbar>
              <Navbar.Brand>
                <Link to="/">E-Commerce App</Link>
              </Navbar.Brand>
              <Nav>
                <Nav.Item icon={<HomeIcon />}>
                  <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/Category">Category</Link>
                </Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav.Item icon={<CogIcon />}>
                  <Link to="/Checkout">
                    Checkout <span>{cart.length}</span>
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Header>
        </Container>
      </div>
    </>
  );
};

export default Na;
