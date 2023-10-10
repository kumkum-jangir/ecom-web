import React from "react";
import logo1 from '../Assets/Images/logo.png';
import about from '../Assets/Images/about.jpg';
import about2 from '../Assets/Images/about-2.png';
import delivery from '../Assets/Images/delivery.svg';
import delivery2 from '../Assets/Images/delivery(2).svg';
import business from '../Assets/Images/business.svg';
import buy from '../Assets/Images/buy.svg';
import team1 from '../Assets/Images/team1.jpg';
import team2 from '../Assets/Images/team2.jpg';
import team3 from '../Assets/Images/team3.jpg';
import user from '../Assets/Images/user.svg';
import a from '../Assets/Images/a.jpg';
import b from '../Assets/Images/b.jpg';
import c from '../Assets/Images/c.jpg';
import d from '../Assets/Images/d.jpg';
import e from '../Assets/Images/e.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function About() {
    return(

<>
  


  <Container fluid className=" bg-light h-100">
    <Container style={{ height: 94 }}>
      <Row>
        <div className="col-md-6 mt-4">
          <h5 className="shop">About Us</h5>
          <div></div>
        </div>
        <Col md="6" className="mt-4">
          <nav>
            <ol className="breadcrumb mb-0  d-flex justify-content-end">
              <li className="b-item">
                <i className="fa-solid fa-house" />{" "}
                <i className="fa-solid fa-angle-right" />
              </li>
              <li className="b-item active">About us</li>
            </ol>
          </nav>
        </Col>
      </Row>
    </Container>
  </Container>
  <section className="fresh-veg">
    <Container fluid>
      <Container>
        <Row className="row gx-xl-5 gy-xl-0 g-3">
          <Col xl="6"  className=" col-12">
            <Row className="g-sm g-2">
              <Col className="col-6 mt-5">
                <div className="fresh-img">
                  <img
                    src={about}
                    style={{ borderRadius: "0px 50px" }}
                  />
                </div>
              </Col>
              <Col className="col-6 mt-5">
                <div className="fresh-img2">
                  <img
                    src={about2}
                    style={{
                      borderRadius: "50px 0px",
                      height: 401,
                      marginTop: 30
                    }}
                  />
                </div>
              </Col>
            </Row> 
          </Col>
          <Col xl="6" className=" col-12 mt-5">
            <div className="fresh p-center-left">
              <h4>About Us</h4>
              <h2>We make organic Food In Market</h2>
            </div>
            <div className="delivery-list">
              <p>
                Just a few seconds to measure your body temperature. Up to 5
                users! The battery lasts up to 2 years. There are many
                variations of passages of Lorem Ipsum available.We started in
                2019 and haven't stopped smashing it since. A global brand that
                doesn't sleep, we are 24/7 and always bringing something new
                with over 100 new products dropping on the monhtly, bringing you
                the latest looks for less.
              </p>
            </div>
            <div className="del">
              <div className="mt-0">
                <img src={delivery} />
                Free delivery for all orders
              </div>
              <br />
              <div className="mt-0">
                <img src={delivery2} />
                Only fresh foods
              </div>
              <br />
              <div className="mt-0">
                <img src={delivery} />
                Free delivery for all orders
              </div>
              <br />
              <div className="mt-0">
                <img src={delivery2} />
                Free delivery for all orders
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </section>
  <Container fluid className="bg-light mt-5" style={{ height: 472 }}>
    <Row>
      <Col className="col-12">
        <div className="about-us">
          <h5 className="what text-center mt-5">What we do</h5>
          <h3 className="center text-center">We are Trusted by Clients</h3>
          <Container className="mt-5">
            <div className="three-c">
              <Row className="row-cols-1 row-cols-md-3 g-4">
                <Col>
                  <div className="card h-100" style={{ borderRadius: 25 }}>
                    <img
                      src={business}
                      className="card-img-top"
                      alt="..."
                      style={{ width: 59, marginLeft: 35, marginTop: 30 }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Business Years</h5>
                      <p className="card-text">
                        A coffee shop is a small business that sells coffee,
                        pastries and other morning goods. There are many
                        different types of coffee shops around the world.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card h-100" style={{ borderRadius: 25 }}>
                    <img
                      src={buy}
                      className="card-img-top"
                      alt="..."
                      style={{ width: 59, marginLeft: 35, marginTop: 30 }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Product Sales</h5>
                      <p className="card-text">
                        A coffee shop is a small business that sells coffee,
                        pastries and other morning goods. There are many
                        different types of coffee shops around the world.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card h-100" style={{ borderRadius: 25 }}>
                    <img
                      src={user}
                      className="card-img-top"
                      alt="..."
                      style={{ width: 59, marginLeft: 35, marginTop: 30 }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Happy Customers</h5>
                      <p className="card-text">
                        A coffee shop is a small business that sells coffee,
                        pastries and other morning goods. There are many
                        different types of coffee shops around the world.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
  <Container fluid-lg className="mt-5">
    <Row>
      <Col className="col-12">
        <div className="about-us">
          <h5 className="what text-center mt-5">Our Creative Team</h5>
          <h3 className="center text-center">Fastkart Team Members</h3>
          <div className="container mt-1 px-100" style={{ marginLeft: 83 }}>
            <Row>
              <Col md="4">
                <div className="team1">
                  <img
                    src={team1}
                    className="rounded-circle"
                    style={{ width: 201 }}
                  />
                </div>
                <div className="wcontent">
                  <h3>Anna Baranov</h3>
                  <span className="marketing mx-5">Marketing</span>
                  <br />
                  <small className="market">
                    Lorem ipsum, dolor sit amet consecdh feet <br />
                    cheesy dolor sit amet consecdh dolor .
                  </small>
                </div>
              </Col>
              <Col md="4">
                <div className="team1">
                  <img
                    src={team2}
                    className="rounded-circle"
                    style={{ width: 201 }}
                  />
                </div>
                <div className="wcontent">
                  <h3>Anna Baranov</h3>
                  <span className="marketing mx-5">Marketing</span>
                  <br />
                  <small className="market">
                    Lorem ipsum, dolor sit amet consecdh feet <br />
                    cheesy dolor sit amet consecdh dolor amet{" "}
                  </small>
                </div>
              </Col>
              <Col md="4">
                <div className="team1">
                  <img
                    src={team3}
                    className="rounded-circle"
                    style={{ width: 201 }}
                  />
                </div>
                <div className="wcontent">
                  <h3>Anna Baranov</h3>
                  <span className="marketing mx-5">Marketing</span>
                  <br />
                  <small className="market">
                    Lorem ipsum, dolor sit amet consecdh feet
                    <br />
                    cheesy dolor sit amet consecdh dolor
                  </small>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  <Container fluid className=" mt-5 bg-light">
    <Row>
      <Col className="col-12">
        <div className="about-us" style={{ height: 379 }}>
          <h5 className="what text-center mt-5">Our Blog</h5>
          <h3 className="center text-center">Our Latest Blog</h3>
          <Container>
            <Row>
              <Col md="2" className="mt-4">
                <img src={a} style={{ width: 220 }} />
                <div>
                  <div className="text mt-3">
                    <h6> dotted jacket</h6>
                    <span className="clr">$26.69</span>
                    <del>28.56</del>
                  </div>
                </div>
              </Col>
              <Col md="2" className="mt-4">
                <img src={b} style={{ width: 220 }} />
                <div>
                  <div className="text mt-3">
                    <h6> dotted jacket</h6>
                    <span className="clr">$26.69</span>
                    <del>28.56</del>
                  </div>
                </div>
              </Col>
              <Col md="2" className="mt-4">
                <img src={c} style={{ width: 220 }} />
                <div>
                  <div className="text mt-3">
                    <h6> dotted jacket</h6>
                    <span className="clr">$26.69</span>
                    <del>28.56</del>
                  </div>
                </div>
              </Col>
              <Col md="2" className="col-md-2 mt-4">
                <img src={d} style={{ width: 220 }} />
                <div>
                  <div className="text mt-3">
                    <h6> dotted jacket</h6>
                    <span className="clr">$26.69</span>
                    <del>28.56</del>
                  </div>
                </div>
              </Col>
              <Col md="2" className="mt-4">
                <img src={e} style={{ width: 220 }} />
                <div>
                  <div className="text mt-3">
                    <h6>Black jacket</h6>
                    <span className="clr">$26.69</span>
                    <del>28.56</del>
                  </div>
                </div>
              </Col>
              <Col md="2" className=" mt-4">
                <img src={b} style={{ width: 220 }} />
                <div>
                  <div className="text mt-3">
                    <h6>Black jacket</h6>
                    <span className="clr">$26.69</span>
                    <del>28.56</del>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
 
</>


    );
}
export default About;