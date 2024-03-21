import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import restoran1 from '../../assets/images/restoran4.jpg'
import restoran2 from '../../assets/images/restoran1.jpg'
import restoran3 from '../../assets/images/restoran3.jpg'

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={restoran1} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Gornja sala naseg restorana</h5>
          <p>Ova nasa sala prima do 70 gostiju</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={restoran2} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Jedan detalj iz naseg restorana</h5>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={restoran3} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Donja sala naseg restorana</h5>
          <p>Ova nasa sala prima do 100 gostiju</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
