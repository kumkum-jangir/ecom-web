import React from "react";
import img from '../Assets/Images/united-states.png';
import fastblue from '../Assets/Images/fastblue.png';
import fashion from '../Assets/Images/fashion.jpg';
import tshirt from '../Assets/Images/t-shirt.svg';
import jeans from '../Assets/Images/jeans.svg';
import cords from '../Assets/Images/cords.svg';
import blazer from '../Assets/Images/blzer.svg';
import jacket from '../Assets/Images/jacket.svg';
import girl1 from '../Assets/Images/girl1.jpg';
import girl2 from '../Assets/Images/girl2.jpg';
import girl3 from '../Assets/Images/girl3.jpg';
import girl4 from '../Assets/Images/girl4.jpg';
import girl6 from '../Assets/Images/girl6.jpg';
import girl7 from '../Assets/Images/girl7.jpg';
import girl15 from '../Assets/Images/girl5.jpg';
import girl8 from '../Assets/Images/girl8.jpg';
import tgirls from '../Assets/Images/three girls.jpg';
import sideban from '../Assets/Images/sideban.jpg';
import one1 from '../Assets/Images/one1.png';
import cashback from '../Assets/Images/cashback.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../Assets/Css/a.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Fashion(){
    const banner={
        height:"35px",
        maxWidth:"29px"
    };
    return(
 

    <>

<div className="head1">
  <Container>
    <Row>
      <Col md="9" className="text pt-3 mb-2 d-flex justify-content-start">
        <h6>
          <strong className="me-1 text-white" style={{ fontSize: 14 }}>
            Welcome to Fastkart! "Wrap new offers/gifts every single day on
            weekends."
          </strong>
          <strong className="ms-1 text-white" style={{ fontSize: 16 }}>
            New Coupon Code: Fast024
          </strong>
        </h6>
      </Col>
      <Col md="2" className="mt-2 d-flex justify-content-end">
        <img
              src={img}
              style={banner}
            />
        <Navbar variant="black" bg="" expand="lg">
      <Container className="mt-4">
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="English"
              menuVariant=""
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                USD
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                French
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Navbar variant="black" bg="" expand="lg">
      <Container className="mt-4">
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="USD"
              menuVariant=""
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                USD
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                French
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
        </Col>
    </Row>
  </Container>
</div>


    <Container>
    <Row className="mx-5">
      <Col md="2" sm="12">
        <img
          src={fastblue}
          className="img-fluid p-4"
          style={{ maxWidth: 209, marginLeft: "-69px" }}
        />
      </Col>
      <Col md="8"  className=" text-end mb-2 py-4">
        <a href="" className="px-2 text-decoration-none text-dark">
          Home
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
        <a href="" className="px-2 text-decoration-none text-dark">
          Shop
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
        <a href="" className="px-2 text-decoration-none text-dark">
          Product
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
        <a href="" className="px-2 text-decoration-none text-dark">
          Mega Menu
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
        <a href="" className="px-2 text-decoration-none text-dark">
          Blog
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
        <a href="" className="px-2 text-decoration-none text-dark">
          Pages
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
        <a href="" className="px-2 text-decoration-none text-dark">
          seller
          <span className="indicator">
            {" "}
            <i className="fa fa-angle-down" />
          </span>
        </a>
      </Col>
      <i
        className="fa-regular fa-bookmark mx-2 border-end border-2"
        style={{ height: 35, width: 38, marginTop: 21 }}
      />
      <i
        className="fa-solid fa-cart-shopping mx-2 border-end border-2"
        style={{ height: 35, width: 38, marginTop: 22 }}
      ></i>
      <i
        className="fa-solid fa-user mx-2 border-end border-2"
        style={{ height: 35, width: 45, marginTop: 22 }}
      />
    </Row>
  </Container>
  {/* Background image */}
  <Container fluid>
    <Row>
      <Col md="12">
    <Card className="text-white">
      <Card.Img className="fashlen" src={fashion} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="weekend text-danger mt-5 mx-5"><h6> WEEKEND SPECIAL OFFER</h6></Card.Title>
        <Card.Text className="PREMIUM mx-5"><h1>PREMIMUM QUALITY</h1>
        </Card.Text>
        <Card.Text className="top-quality mx-5"><h5> Fresh &amp; Top Quality Dry Fruits are available here!</h5></Card.Text>
        <Button className="fashbtn" variant="">Shop Now  <i className="fa-solid fa-right-long icon" /></Button>{' '}

      </Card.ImgOverlay>
    </Card>

      </Col>
    </Row>
    <Container>
      <Row className="mt-5 d-flex justify-content-between">
        <Col md="2" className="abc" style={{ marginLeft: 10 }}>
          <img
            src={tshirt}
            style={{ width: 45, marginLeft: 54, marginTop: 24 }}
          />
          <h6 className="top" style={{ marginLeft: 58, marginTop: 13 }}>
            Tops
          </h6>
        </Col>
        <Col md="2" className="abc" style={{ marginLeft: 1 }}>
          <img
            src={jeans}
            style={{ width: 45, marginLeft: 54, marginTop: 24 }}
          />
          <h6 className="veg" style={{ marginLeft: 50, marginTop: 13 }}>
            bottoms
          </h6>
        </Col>
        <Col md="2" className="col-md-2 abc" style={{ marginLeft: 1 }}>
          <img
            src={cords}
            style={{ width: 45, marginLeft: 54, marginTop: 24 }}
          />
          <h6 className="bre" style={{ marginLeft: 50, marginTop: 13 }}>
            co-ords
          </h6>
        </Col>
        <Col md="2" className="abc" style={{ marginLeft: 3 }}>
          <img
            src={jacket}
            style={{ width: 45, marginLeft: 54, marginTop: 24 }}
          />
          <h6 className="mt-2" style={{ marginLeft: 50, marginTop: 13 }}>
            jackets
          </h6>
        </Col>
        <Col md="2" className="col-md-2 abc" style={{ marginLeft: 3 }}>
          <img
            src={blazer}
            style={{ width: 45, marginLeft: 54, marginTop: 24 }}
          />
          <h6 className="bl" style={{ marginLeft: 50, marginTop: 13 }}>
            blazers
          </h6>
        </Col>
      </Row>
    </Container>
  </Container>
  {/* Top selling items */}
  <Container>
    <Row>
      <h4 className="mt-5">
        <b>Top Selling Products</b>
      </h4>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div>
          <div className="text mt-3">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl2} style={{ width: 216 }} />
        <div>
          <div className="text mt-3">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl3} style={{ width: 216 }} />
        <div>
          <div className="text mt-3">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl4} style={{ width: 216 }} />
        <div>
          <div className="text mt-3">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div>
          <div className="text mt-3">
            <h6>Black jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="col-md-2 mt-4">
        <img src={girl2} style={{ width: 216 }} />
        <div className="text mt-3">
          <h6>Black jacket</h6>
          <span className="clr">$26.69</span>
          <del>28.56</del>
        </div>
      </Col>
    </Row>
  </Container>
  <Container>
    <div className="card bg-light text-white my-5">
      <img
        src={tgirls}
        className="card-img"
        alt="..."
        style={{ height: 242 }}
      />
      <div className="card-img-overlay">
        <h2 className=" orange-theme20">Get Ready To</h2>
        <h3 className="mt-2 mb-3 take-on"> TAKE ON THE DAY!</h3>
        <p className=" text-content22">
          In publishing and graphic design, Lorem ipsum is a <br />
          placeholder text commonly used to demonstrate
        </p>
        <div className="mt-30 mt-2">
          <a className="btn btn-secondary " href="#">
            Shop now <i className="fa-solid fa-right-long icon" />
          </a>
        </div>
      </div> 
    </div>


    
  </Container>
  <Container>
    <Col md="12">
      <img
        src={one1}
        style={{ width: 1125, marginTop: 48 }}
      />
    </Col>
  </Container>
  <Container>
    <Row>
      <Col md="4" className="mt-5">
        <img src={sideban} style={{ height: 591 }} />
      </Col>
      <Col md="4" style={{ width: 356, borderRadius: 12 }}>
        <div className="mb-3 mt-4" style={{ maxWidth: 313 }}>
          <Row className=" g-0">
            <Col md="4">
              <img
                src={girl1}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 15, marginTop: 30 }}
              />
            </Col>
            <Col md="8" className="bdotted">
              <div
                className="card-body"
                style={{ marginLeft: 31, marginTop: 51 }}
              >
                <h5 className="card-title">Tuffets Britannia...</h5>
                <p className="card-text">500g</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4">
              <img
                src={girl2}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 15, marginTop: 22 }}
              />
            </Col>
            <Col md="8" className=" bdotted">
              <div
                className="card-body"
                style={{ marginLeft: 31, marginTop: 51 }}
              >
                <h5 className="card-title">Patato</h5>
                <p className="card-text">500g</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4">
              <img
                src={girl3}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 15, marginTop: 24 }}
              />
            </Col>
            <Col md="8" className=" bdotted">
              <div
                className="card-body"
                style={{ marginLeft: 19, marginTop: 51 }}
              >
                <h5 className="card-title">Green Chilli</h5>
                <p className="card-text">200 g</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4">
              <img
                src={girl4}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 15, marginTop: 18 }}
              />
            </Col>
            <Col md="8">
              <div
                className="card-body"
                style={{ marginLeft: 26, marginTop: 51 }}
              >
                <h5 className="card-title">Muffets Burger Bun</h5>
                <p className="card-text">150 g</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md="4"
        style={{ width: 356, marginLeft: 24, borderRadius: 12 }}
      >
        <div className="mt-4 mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4">
              <img
                src={girl8}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 20, marginTop: 20 }}
              />
            </Col>
            <Col md="8" className="bdotted">
              <div
                className="card-body"
                style={{ marginLeft: 24, marginTop: 30 }}
              >
                <h5 className="card-title">Tuffets Britannia...</h5>
                <p className="card-text">500g</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4">
              <img
                src={girl6}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 26, marginTop: 16, width: 101 }}
              />
            </Col>
            <Col md="8" className="bdotted">
              <div
                className="card-body"
                style={{ marginLeft: 31, marginTop: 51 }}
              >
                <h5 className="card-title">Long Life Toned Milk</h5>
                <p className="card-text">1 L</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4" className="col-md-4">
              <img
                src={girl7}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 30, marginTop: 30 }}
              />
            </Col>
            <Col className="bdotted">
              <div
                className="card-body"
                style={{ marginLeft: 31, marginTop: 51 }}
              >
                <h5 className="card-title">Organic Tamato</h5>
                <p className="card-text">1 Kg</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-3" style={{ maxWidth: 540 }}>
          <Row className="g-0">
            <Col md="4">
              <img
                src={girl15}
                className="img-fluid rounded-start"
                alt="..."
                style={{ marginLeft: 33, marginTop: 17 }}
              />
            </Col>
            <Col md="8">
              <div
                className="card-body"
                style={{ marginLeft: 41, marginTop: 39 }}
              >
                <h5 className="card-title">Organic Jam</h5>
                <p className="card-text">150 gm</p>
                <h6 className="color-brand-2">$ 10.00</h6>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
  <Container>
    <Col md="12" className="mt-5">
      <img src={cashback} />
    </Col>
  </Container>
  <Container>
    <Row>
      <h4 className="mt-5">
        <b>Top Selling items</b>
      </h4>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl2} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl3} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl4} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6>Black jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div className="text">
          <h6>Black jacket</h6>
          <span className="clr">$26.69</span>
          <del>28.56</del>
        </div>
      </Col>
    </Row>
  </Container>
  <Container>
    <Row className="mt-5">
      <h4 className="mt-5">
        <b>Top Selling items</b>
      </h4>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl2} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl3} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl4} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6> dotted jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl1} style={{ width: 216 }} />
        <div>
          <div className="text">
            <h6>Black jacket</h6>
            <span className="clr">$26.69</span>
            <del>28.56</del>
          </div>
        </div>
      </Col>
      <Col md="2" className="mt-4">
        <img src={girl2} style={{ width: 216 }} />
        <div className="text">
          <h6>Black jacket</h6>
          <span className="clr">$26.69</span>
          <del>28.56</del>
        </div>
      </Col>
    </Row>
  </Container>
  <Container className="section-box box-newsletter mt-5">
    <Container>
      <Row>
        <Col lg="6" md="7" sm="12">
          <h3 className="color-white">
            Subscrible &amp; Get <span className="color-yellow">10%</span>
            Discount
          </h3>
          <p className="font-lg colors-white">
            Get E-mail updates about our latest shop and Special Offers
          </p>
        </Col>
        <Col lg="4" md="5" sm="12">
          <div className="box-form-newsletter mt-15">
            <form className="form-newsletter">
              <input
                className="input-newsletter font-xs"
                defaultValue=""
                placeholder="Your email Address"
              />
              <button className="btn btn-brand-4">Sign Up</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>

 
</>

    
    )
}
export default Fashion;