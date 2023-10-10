import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import new1 from '../../Assets/Images/new1.jpg';
import new2 from '../../Assets/Images/new2.jpg';
import new3 from '../../Assets/Images/new3.jpg';
import new4 from '../../Assets/Images/new4.jpg';
import './TestiMonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: '',
            description: '',
            address: '',
            img: new1
        },
        {
            name: '',
            description: '',
            address: '',
            img: new2
        },
        {
            name: '',
            description: '',
            address: '',
            img: new3
        },
        {
            name: '',
            description: '',
            address: '',
            img: new4
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
<>
        <Container fluid className="bg-light h-100">
        <Container style={{ height: 94 }}>
          <Row>
            <Col md="6" className="mt-4">
              <h5 className="shop"><b>Creamy Chocolate Cake</b></h5>
              <div></div>
            </Col>
            <Col md="6" className="mt-4">
              <nav>
                <ol className="breadcrumb mb-0  d-flex justify-content-end">
                  <li className="b-item">
                    <i className="fa-solid fa-house" />{" "}  
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="b-item active">Creamy Chocolate Cake</li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </Container>


        <section id="testimonial" className="testimonials pt-70 pb-70 mb-1">
            <div className="container mt-5">
               
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle"  />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                    
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default TestiMonials;