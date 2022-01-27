import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import Img1 from '../Images/A1.jpg';
import Img2 from '../Images/A2.jpg';
import Img3 from '../Images/A3.jpg';
import Img4 from '../Images/A4.jpg';
import Img5 from '../Images/A5.jpg';
import Img6 from '../Images/A6.jpg';
import Img7 from '../Images/A7.jpg';
import Img8 from '../Images/A8.jpg';
import Img9 from '../Images/C1.png';

export default function AboutScreen() {
    return (
        <div>
            <br/>
            <h1 align="center">About Us</h1>
            <div class="container">
            <header class="jumbotron my-4">
            <h2 class="mb-4 text-center">Welcome to</h2>
            <h2 class="mb-4 text-center">Wisdom Sprouts : E-Learning Platform</h2>
            <div align="center">
            <img
             src={Img9}
             alt="Learn"/>
             </div>
             <br/>
            <p class="lead text-justify">&emsp;&emsp; We take immense pride in calling ourselves as the first preference of many students when it comes to training. Our faculties, who have multiple years of industry experience make sure that students don’t miss out on any part when it comes to their training. We even believe in giving extra to the students than what is promised. Around 70% of the students who are trained at Wisdom Sprouts make it to their desired Job. Our specialty is training students who are lack in their technical skills, confidence and soft skills.<a href="http://localhost:3000/contactus"> Join Us!</a> </p>
            </header>
            </div>
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-8 text-center heading-section ftco-animate">
            <h2 class="mb-4">Our Satisfied Students Says</h2>
            <p>Wisdom Sprouts - One Step To Sucess</p>
          </div>
        </div>
        <Row>
        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img1} />
        <Card.Body>
        <Card.Title align="center">Avantika</Card.Title>
        <Card.Text>
         Wisdom Sprouts is the best place to learn and improve your knowledge. The best thing about this training is its high quality informative videos.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img2} />
        <Card.Body>
        <Card.Title align="center">Yash</Card.Title>
        <Card.Text>
         Wisdom Sprouts is one of the best platform. Because of the training content which helped to improve your skill & knowledge. To learn many more things.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img3} />
        <Card.Body>
        <Card.Title align="center">Saumya</Card.Title>
        <Card.Text>
         I LOVE THIS PLATFORM. I've taken dozens of courses and learned so much. & It's free unless you want to earn a certificate. My favorite course is "Hacking".
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img4} />
        <Card.Body>
        <Card.Title align="center">Akash</Card.Title>
        <Card.Text>
         Wisdom Sprouts is one of the best platform. To learn different types of courses with mininmum price. My favorite course is "ML" Love it !
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>

        <br/><br/>
        <Row>
        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img5} />
        <Card.Body>
        <Card.Title align="center">Priya</Card.Title>
        <Card.Text>
         Wisdom Sprouts is one of the best platform. Because of the training content which helped to improve your skill & knowledge. To learn many more things.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img6} />
        <Card.Body>
        <Card.Title align="center">Akanksha</Card.Title>
        <Card.Text>
         Wisdom Sprouts is the best place to learn and improve your knowledge. The best thing about this training is its high quality informative videos.
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img7} />
        <Card.Body>
        <Card.Title align="center">Om</Card.Title>
        <Card.Text>
         Wisdom Sprouts is one of the best platform. To learn different types of courses with mininmum price. My favorite course is "ML" Love it !         </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={Img8} />
        <Card.Body>
        <Card.Title align="center">Raghav</Card.Title>
        <Card.Text>
        I LOVE THIS PLATFORM. I've taken dozens of courses and learned so much. & It's free unless you want to earn a certificate. My favorite course is "Hacking".
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </div>
    )
}
