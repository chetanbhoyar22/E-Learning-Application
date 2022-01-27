import React, { useEffect } from 'react'
// import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import '../App.css';
import {
  getOrderDetails
} from '../actions/orderActions'



const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  //const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

//   const orderPay = useSelector((state) => state.orderPay)
//   const { loading: loadingPay, success: successPay } = orderPay

//   const orderDeliver = useSelector((state) => state.orderDeliver)
//   const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price, 0)
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }

    // const addPayPalScript = async () => {
    //   const { data: clientId } = await axios.get('/api/config/paypal')
    //   const script = document.createElement('script')
    //   script.type = 'text/javascript'
    //   script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    //   script.async = true
    //   script.onload = () => {
    //    setSdkReady(true)
    //   }
    //   document.body.appendChild(script)
    // }

    if (!order || order._id !== orderId) {
    //   dispatch({ type: ORDER_PAY_RESET })
    //   dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
    //  else if (!order.isPaid) {
    //   if (!window.paypal) {
    //     addPayPalScript()
    //   } else {
    //     setSdkReady(true)
    //   }
    }
  },[dispatch, orderId, order])

//   const successPaymentHandler = (paymentResult) => {
//     console.log(paymentResult)
//     dispatch(payOrder(orderId, paymentResult))
//   }

//   const successHandler = () => {
//     dispatch()
//   }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
     
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
          <h2 className="marginTop mx-auto d-block">Order Summary</h2><br/>
            <ListGroup.Item>
            <h2>Order ID :  {order._id}</h2>
              {/* <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p> */}
              {/* <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p> */}
              {/* {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )} */}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {/* {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )} */}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col>
                          <Link to={`/course/${item.course}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                        Price = Rs. {item.price}/-
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card className="marginTop">
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <h2>Amount Details</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items Price</Col>
                  <Col>Rs. {order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs. {order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Amount</Col>
                  <Col>Rs. {order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <Button
                    disabled='true'
                    type='button'
                  >
                   Disabled
                  </Button>
                    // <PayPalButton
                    //   amount={order.totalPrice}
                    //   onSuccess={successPaymentHandler}
                    // />
                  )}
                </ListGroup.Item>
              )} */}
              {/* {loadingDeliver && <Loader />} */}
              {/* {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && 
                
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={successHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                } */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen