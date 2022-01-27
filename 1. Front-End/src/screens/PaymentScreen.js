import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch} from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";
import '../App.css';

const PaymentScreen = ({ history }) => {

  const [paymentMethod, setPaymentMethod] = useState("Debit Card");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };


  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 align="center">Payment Method</h1><br/><br/>
      <Form onSubmit={submitHandler}>
        <Form.Group className="left">
          <Col>
            <Form.Check
              type='radio'
              label='Debit Card'
              id='DC'
              name='paymentMethod'
              value='Debit Card'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <br/>
            {/* <Form.Check
              type='radio'
              label='Credit Card'
              id='CC'
              name='paymentMethod'
              value='Credit Card'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <br/>
            <Form.Check
              type='radio'
              label='Phone Pay'
              id='PP'
              name='paymentMethod'
              value='Phone Pay'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <br/>
            <Form.Check
              type='radio'
              label='UPI'
              id='UPI'
              name='paymentMethod'
              value='UPI'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>
        <br/>
        <Button type='submit' variant='primary' className='mx-auto d-block'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;