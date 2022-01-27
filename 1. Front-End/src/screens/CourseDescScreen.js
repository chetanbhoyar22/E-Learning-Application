import React, { useEffect } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listCourseDetails } from "../actions/courseActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Img1 from '../Images/5.png';
import Img2 from '../Images/6.png';
import Img3 from '../Images/7.png';
import Img4 from '../Images/8.png';
import Img5 from '../Images/9.png';
import Img6 from '../Images/10.png';
import Img7 from '../Images/11.png';
import Img8 from '../Images/12.png';
import Img9 from '../Images/13.png';
import Img10 from '../Images/Certified.PNG';
import '../App.css';
//import axios from "axios";

// export default function CourseDescScreen({ match }) {

//     const [course, setCourses] = useState ([]);
// useEffect (() => {
//     const fetchCourse = async () => {
//         const { data } = await axios.get(`/api/coursebyid/${match.params.id}`);

//           setCourses(data);
//     };

//      fetchCourse();
// }, [match]);

export default function CourseScreen({ history, match }) {
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    history.push(`/cart/${match.params.id}`)
  };

  //const [qty, setQty] = useState(1);

  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, course } = courseDetails;

  useEffect(() => {
    dispatch(listCourseDetails(match.params.id));
  }, [dispatch, match]);

return(
    <> 
        {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={4}>
          <Link to='/Courses' className='btn btn-light my-3'>
            Go Back
          </Link>
          <Image src={`http://localhost:4000/${course.image}`} fluid /><br/><br/><br/>
          <ListGroup.Item><h5 align="center">COURSE CONTENT</h5></ListGroup.Item>
          <ListGroup.Item>{course.coursecontent}</ListGroup.Item>
          </Col>
          <Col md={5}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3><br/>{course.name}</h3>
                Course Category : {course.category}<br/>
                <br/>
                <div><img src={Img10} height="35" alt="Certified"/></div>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Rating
                  value={course.rating}
                  text={` ${course.numReviews} Reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : ₹{course.price}<del className="padding">₹4499</del></ListGroup.Item>
              <ListGroup.Item>
                Description : {course.description}
              </ListGroup.Item>
              <ListGroup.Item>
              <h5 align="center">How will you get your certificate?</h5>
             <p font-family="Fantasy">Take the final test online to complete the training after which you will be able to get your certificate from Coursera Trainings.</p>               </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
            <h5 align="center">Training Highlights</h5><br/>
            <img src={Img1} height="35" alt="Video"/> Video tutorials - learn anytime, anywhere.<br/><br/>
            <img src={Img2} height="35" alt="Assignments"/> 3 Assignments & 1 Project for hands-on practice.<br/><br/>
            <img src={Img3} height="35" alt="Doubt"/> Doubt clearing through Q&A forum.<br/><br/> 
            <img src={Img4} height="35" alt="Downloadable"/> Downloadable content with lifetime access.<br/><br/> 
            <img src={Img5} height="35" alt="Knowledge"/> Beginner friendly no prior knowledge required.<br/><br/>
            </ListGroup.Item>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price :</Col>
                    <Col>
                      <strong>Rs.{course.price}/-</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Duration :</Col>
                    <Col>
                      <strong>{course.duration}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Completion Certificate :</Col>
                    <Col>
                      <strong>{course.certificate}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Button
                    onClick={checkoutHandler}
                    className='btn btn-block'
                    type='button'
                  >
                    Add To Cart
                  </Button>
                  <br/>
                </ListGroup.Item>
                <ListGroup.Item>
                <h5 align="center">How will the contest work?</h5><br/>
                <img src={Img6} height="35" alt="1"/> Register for the contest and get access to training. <br/><br/>
                <img src={Img7} height="35" alt="2"/> Complete the training by giving a final test.<br/><br/>
                <img src={Img8} height="35" alt="3"/> Build and submit your project for evaluation.<br/><br/> 
                <img src={Img9} height="35" alt="4"/> Top 3 performers will win cash prizes of INR 65,000.<br/><br/>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
     )}
    </>
  );
}