import React, { useEffect } from "react";
import Course from "../components/Course.js";
import ImageSlider from "../components/ImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { listCourses } from "../actions/courseActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const CourseScreen = () => {
  const dispatch = useDispatch();

  const courseList = useSelector((state) => state.courseList);

  const { loading, error, courses } = courseList;
  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);

  // const products = [];
    return (
        <div>
            <ImageSlider />
            <hr/>
            <h1 align="center">Available Courses</h1>
            <hr/>
            {loading ? (
            <Loader />
            ) : error ? (
            <Message variant='danger'>{error}</Message>
            ) : (
            <Row>
              {courses &&
                courses.map((course) => (
                  <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
                    <Course courses_data={course} />
                  </Col>
                ))}
            </Row>
           )}
        </div>
        
    );
};
export default CourseScreen;
