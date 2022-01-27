import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import '../App.css';

const CartScreen = ({ match, location, history }) => {
  const courseId = match.params.id;

  //const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
  useEffect(() => {
    if (courseId) {
      dispatch(addToCart(courseId));
    }
  }, [dispatch, courseId]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=payment");
  };

  return (
    <Row>
      <Col md={8}>
        <h1 className="marginTop">Courses Cart</h1><br/>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty. <Link to='/courses'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems &&
              cartItems.map((item) => (
                <ListGroup.Item key={item.course}>
                  <Row>
                    <Col md={2}>
                       <Image src={`http://localhost:4000/${item.image}`} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/course/${item.course}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}> 
                    <Link to={`/course/${item.course}`}>₹{item.price}</Link>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.course)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card className="marginTop">
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>
                Total Amount
              </h4>
               <h4>Rs.  
               {cartItems
                .reduce((acc, item) => acc + item.price, 0)} /-</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;