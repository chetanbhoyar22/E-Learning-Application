import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CoursesScreen from "./screens/CoursesScreen";
import CourseDescScreen from "./screens/CourseDescScreen";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import PaymentScreen from "./screens/PaymentScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App()
{
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/courses' component={CoursesScreen} />
          <Route path='/course/:id' component={CourseDescScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/contactus' component={ContactScreen} />
          <Route path='/aboutus' component={AboutScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/orderbyid/:id' component={OrderScreen} />
          </Container>
      </main>
      <br/><br/><br/><br/><br/>
      <Footer />
    </Router>
  );
}