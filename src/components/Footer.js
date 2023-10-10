import React from "react";
import product from '../Assets/Images/product.svg';
import discount from '../Assets/Images/discount.svg';
import logo from '../Assets/Images/logo.png';
import google from '../Assets/Images/google.svg';
import appstore from '../Assets/Images/appstore.svg';
import footer from '../Assets/Images/footer img.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer(){
    return(
        <>
         <Container fluid className="bg-light mt-5">
  <Container className="bg-light">
    <Container className="bdotted2">
      <Row className="mt-5" style={{ marginBottom: 40 }}>
        <Col md="6" style={{ marginTop: 40 }}>
          <img src={product} />
          Every Fresh Products
          <br />
          <div className="mt-5">
            <img src={discount} />
            Daily Mega Discounts
          </div>
        </Col>
        <Col md="6" className="border-start" style={{ marginTop: 40 }}>
          <img src={product} />
          Every Fresh Products
          <br />
          <div className="mt-5">
            <img src={discount} />
            Daily Mega Discounts
          </div>
        </Col>
      </Row>
    </Container>
    <Row className=" pt-5 r2">
      <Row>
        <Col  className="width-25 mb-30">
          <img
            src={logo}
            style={{ width: 188, paddingBottom: 13 }}
          />
          <br />
          <span className="text" style={{ color: "gray" }}>
            We are a friendly bar serving a variety of cocktails, wines and
            beers. Our bar is a perfect place for a couple.
          </span>
          <br />
          <i className="fa-solid fa-house" />
          <span className="g1" style={{ color: "gray" }}>
            1418 Riverwood Drive, CA 96052
          </span>
          <br />
          <i className="fa-regular fa-envelope" />
          <span className="g2" style={{ color: "gray" }}>
            support@fastcart
          </span>
        </Col>
        <Col lg="2" className="width-20 mb-30">
          <h4 className="mb-30 color-gray-1000">Categories</h4>
          <ul className="menu-footer">
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Vegetables &amp; Fruit
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Beverages
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Meats &amp; Seafood
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Frozen Foods
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Biscuits &amp; Snacks
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Grocery &amp; Staples
              </a>
            </li>
          </ul>
        </Col>

        <Col lg="2" className="width-16 mb-30">
          <h4 className="mb-30 color-gray-1000">Useful Links</h4>
          <ul className="menu-footer">
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Home
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Shop
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                About Us
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Blog
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </Col>
        <Col lg="2" className="width-16 mb-30">
          <h4 className="mb-30 color-gray-1000">Help Center</h4>
          <ul className="menu-footer">
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Your Order
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Your Account
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Track Order
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Your Wishlist
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Search
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                FAQ
              </a>
            </li>
          </ul>
        </Col>
        <Col lg="3" className="width-23">
          <h4 className="mb-30 color-gray-1000">Contact Us</h4>
          <div>
            <p className="font-md color-gray-900 bdotted">
              <i className="fa-solid fa-phone" />
              Hotline 24/7:
              <br />
              <b>+91 888 104 2340</b>
            </p>
            <p className="font-md color-gray-900 bdotted">
              <i className="fa-solid fa-envelope" />
              Email address:
              <br />
              <b>fastkart@hotmail.com</b>
            </p>
            Download App
            <br />
            <img src={google} alt="Ecom" />
            <img src={appstore} alt="Ecom" />
          </div>
        </Col>
        <Container className="container-fluid">
          <img src={footer} />
        </Container>
      </Row>
    </Row>
  </Container>
</Container>
        </>
    )
}
export default Footer;