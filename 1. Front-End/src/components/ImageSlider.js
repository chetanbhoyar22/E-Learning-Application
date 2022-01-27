import {Carousel} from 'react-bootstrap';
import Img1 from '../Images/1.jpg';
import Img3 from '../Images/2.jpg';
import Img4 from '../Images/3.jpg';

function Image_slider()
{
    return(<div>
        <Carousel>
  <Carousel.Item>
    <img
     height="450"
     width="600"
      className="d-block w-100"
      src={Img1}
      alt="Learn To Love"
    />
    {<Carousel.Caption>
      <h4>Learn & Growth Your Carrer</h4>
    </Carousel.Caption>}
  </Carousel.Item>
  <Carousel.Item>
    <img
      height="450"
      width="600"
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    { <Carousel.Caption>
      <h4>Work Hard</h4>
    </Carousel.Caption> }
  </Carousel.Item>
  <Carousel.Item>
    <img
      height="450"
      width="600"
      className="d-block w-100"
      src={Img4}
      alt="Fourth slide"
    />
    { <Carousel.Caption>
      <h4>Professional Teaching</h4>
    </Carousel.Caption> }
  </Carousel.Item>
</Carousel>

    </div>);
}

export default Image_slider;