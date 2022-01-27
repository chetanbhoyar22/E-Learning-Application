import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import '../App.css';

const Course = ({courses_data}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/course/${courses_data._id}`}>
        <Card.Img src={courses_data.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/course/${courses_data._id}`}>
          <Card.Title as='div'>
          <Card.Text as='h7'>{courses_data.name}</Card.Text>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={courses_data.rating}
            text={` ${courses_data.numReviews} Reviews`}
          />
        </Card.Text>
        <Card.Text as='h4'>₹{courses_data.price}<del className="padding">₹4499</del></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Course;