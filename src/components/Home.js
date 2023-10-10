import React from "react";
import img1 from '../Assets/Images/5.jpg';
import img2 from '../Assets/Images/6.jpg';
import img3 from '../Assets/Images/4.jpg';
import img4 from '../Assets/Images/vegetable.svg';
import img5 from '../Assets/Images/meats.svg';
import img6 from '../Assets/Images/breakfast.svg';
import img7 from '../Assets/Images/frozen.svg';
import img8 from '../Assets/Images/biscuit.svg';
import img9 from '../Assets/Images/grocery.svg';
import img10 from '../Assets/Images/drink.svg';
import img11 from '../Assets/Images/milk.svg';
import img12 from '../Assets/Images/pet.svg';
import img13 from '../Assets/Images/bev.svg';
import leaf from '../Assets/Images/leaf.png';
import fantacy from  '../Assets/Images/fantacy.png';
import coffee from '../Assets/Images/coffee.png';
import snack from '../Assets/Images/snack.png';
import toor from '../Assets/Images/toor.png';
import peanut from '../Assets/Images/peanut.png';
import chips from '../Assets/Images/chips.png';
import fresher from '../Assets/Images/fresher.jpg';
import mashroom from '../Assets/Images/mashroom.jpg';
import vegies from '../Assets/Images/vegies.jpg';
import greenpic from '../Assets/Images/greenpic.jpg';
import orange from '../Assets/Images/orange.jpg';
import bottle from '../Assets/Images/bottle.jpg';
import bread from '../Assets/Images/bread.png';
import potato from '../Assets/Images/potato.png';
import greenchili from '../Assets/Images/greenchilli.png';
import burger from '../Assets/Images/burger bun.png';
import cheeza from '../Assets/Images/cheeza.png';
import toned from '../Assets/Images/toned milk.png';
import tomato from '../Assets/Images/tomato.png';
import jam from '../Assets/Images/jam.png';
import summerveg from '../Assets/Images/summerveg.jpg';
import canned from '../Assets/Images/canned.png';
import kernels from '../Assets/Images/kernels.png';
import apple from '../Assets/Images/apple.png';
import girl from '../Assets/Images/girl.jpg';
import lemon from '../Assets/Images/lemon.jpg';
import lemon2 from '../Assets/Images/lemon-2.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import dates from '../Assets/Images/dates.png';

function Home(){
    return(
        <>
         <Container>
    <Row>
      <Col md="8">
        <div className="banner">
          <div className="needs py-5">
            <h6 className="offer mx-5 mt-5">
              Exclusive offer
              <span className="percent text-danger">30% off</span>
            </h6>
            <h1 className="text-uppercase mx-5">
              STAY HOME &amp; <br /> DELIVERRED Your <br />
              <span className="daily">Daily Needs</span>
            </h1>
            <p className="w-75 d-none d-sm-block mx-5">
              Vegetables contain many vitamins and
              <br />
              minerals that are good for your health.
            </p>
            <Row>
              <Col lg="5" md="7"  sm="12">
                <p className="font-sm color-brand-3" />
              </Col>
            </Row>
            <div className="mt-30 mx-5">
            <Button variant="danger">Shop Now</Button>{' '}
            </div>
          </div>
        </div>
      </Col>
      <Col md="4">
        <Row>
          <div className="banner-small bg-13">
            <h2 className="mt-3 text-danger mx-3">
              45%
              <span className="discount text-title">OFF</span>
            </h2>
            <h3 className="theme-color1 mx-3">Nut collection</h3>
            <p className="w-75 mx-3">
              We deliver organic <br />
              vegetables &amp; fruits{" "}
            </p>
            <div className="mt-20">
            <Button variant="danger">Shop Now</Button>{' '}
            </div>
          </div>
        </Row>
        <Col md="12">
          <Row>
            <div className="banner-small-2 bg-14">
              <h2 className="mt-3 ff mx-3">Healthy Food</h2>
              <h3 className="theme-color1 text-danger mx-3">Organic Market </h3>
              <p className="w-75 mx-3">
                We deliver organic <br />
                vegetables &amp; fruits...{" "}
              </p>
              <div className="mt-20">
              <Button variant="danger">Shop Now</Button>{' '}
              </div>
            </div>
          </Row>
        </Col>
      </Col>
    </Row>
  </Container>
  <Container>
    <Row>
    <Col md="4" className="mt-5">
      <Card className=" text-white">
      <Card.Img src={img1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="card-title12 text-danger mt-4"><h6>5% OFF</h6></Card.Title>
        <Card.Text className="meat12"><h5>Organic Meat Prepared</h5></Card.Text>
        <Card.Text className="card-content"> <h6>Delivered to Your Home</h6></Card.Text>
        <Button variant="" className="newbt">Shop Now</Button>{' '}
      </Card.ImgOverlay>
    </Card>
    </Col>
      <Col md="4" className="mt-5">
      <Card className=" text-white">
      <Card.Img src={img2} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="card-title12 text-danger mt-4"><h6>5% OFF</h6></Card.Title>
        <Card.Text className="meat12"><h5>Organic Meat Prepared</h5></Card.Text>
        <Card.Text className="card-content"> <h6>Delivered to Your Home</h6></Card.Text>
        <Button variant="" className="newbt">Shop Now</Button>{' '}
      </Card.ImgOverlay>
    </Card>
    </Col>
      <Col md="4" className="mt-5">
      <Card className=" text-white">
      <Card.Img src={img3} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="card-title12 text-danger mt-4"><h6>5% OFF</h6></Card.Title>
        <Card.Text className="meat12"><h5>Organic Meat Prepared</h5></Card.Text>
        <Card.Text className="card-content"> <h6>Delivered to Your Home</h6></Card.Text>
        <Button variant="" className="newbt">Shop Now</Button>{' '}
      </Card.ImgOverlay>
    </Card>
    </Col>
    </Row>
  </Container>

  <Container>
    <Row sm="4" className=" g-3">
      <Col xxl="3" xl="4" className="d-done d-xl-block mt-5">
        <div className="category-menu">
          <h5 className="category underline1 p-4" style={{ width: 114 }}>
            Category
          </h5>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className=" g-0">
              <Col md="2"  style={{ marginLeft: 22 }}>
                <img src={img4} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Vegetables &amp; Foods</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className=" g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img5} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Beverages</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className=" g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img6} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Meats &amp; Seafood</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className=" mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img7} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Breakfast &amp; Dairy</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img8} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Frozen &amp; Foods</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img9} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Biscuits &amp; Snacks</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img10} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Grocery &amp; Staples</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className=" mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" className="col-md-2" style={{ marginLeft: 22 }}>
                <img src={img11} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Wines &amp; Alcohol Drinks</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={img12} alt="" width="33px" />
              </Col>
              <Col md="4" style={{ marginLeft: "-64px" }}>
                <h6>Milk &amp; Dairies</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" className=" mt-4" style={{ width: 700 }}>
            <Row className=" g-0">
              <Col md="2"  style={{ marginLeft: 22 }}>
                <img src={img13} alt="" width="33px" />
              </Col>
              <Col md="4"  style={{ marginLeft: "-64px" }}>
                <h6>Pet Foods</h6>
              </Col>
            </Row>
          </Col>
          <hr />
          <div className="value p-4">
            <p>Value of the Day</p>
            <p>Top 50 Offers</p>
            <p>New Arrivals</p>
          </div>
        </div>
      </Col>
      <Col xxl="9" xl="8" className="mt-5">
        <Row>
          <div>
            <h3>Top Save Today</h3>
            <img src={leaf}/>
            <p>
              Don't miss this opportunity at a special discount just for this
              week
            </p>
          </div>
        </Row>
        <div className="Products">
          <CardGroup>
      <Card className="card crd-1">
        <Card.Img variant="top"  src={fantacy} />
        <Card.Body>
          <Card.Title><h6>Fantasy Crunchy Choco Chip Cookies</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>


        <Card className="card crd-1">
        <Card.Img variant="top"  src={coffee} />
        <Card.Body>
          <Card.Title><h6> Peanut Butter Bite Premium Butter Cookies 600 g</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>
        <Card className="card crd-1">
        <Card.Img variant="top"  src={snack} />
        <Card.Body>
          <Card.Title><h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>
    </CardGroup>

    <CardGroup>
      <Card className="card crd-1">
        <Card.Img variant="top"  src={toor} />
        <Card.Body>
          <Card.Title><h6>Fantasy Crunchy Choco Chip Cookies</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>


        <Card className="card crd-1">
        <Card.Img variant="top"  src={peanut} />
        <Card.Body>
          <Card.Title><h6> Peanut Butter Bite Premium Butter Cookies 600 g</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>
        <Card className="card crd-1">
        <Card.Img variant="top"  src={chips} />
        <Card.Body>
          <Card.Title><h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>
    </CardGroup>



          {/* <-- Browse by category*/}
          <div className="title py-4">
            <h3>Bowse by Categories</h3>
            <img src={leaf}/>
            <p>Top Categories Of The Week</p>
            <Container>
              <Row className="d-flex justify-content-between">
                <Col md="2" className="abc" style={{ marginLeft: 10 }}>
                  <img
                    src={img5}
                    style={{ width: 51, marginLeft: 24, marginTop: 19 }}
                  />
                  <h6 className="meat mt-2 mr-2">Meats &amp;...</h6>
                </Col>
                <Col md="2" className="abc" style={{ marginLeft: 1 }}>
                  <img
                    src={img6}
                    style={{ width: 51, marginLeft: 24, marginTop: 19 }}
                  />
                  <h6 className="veg mt-4">vegetables</h6>
                </Col>
                <Col md="2" className="abc" style={{ marginLeft: 1 }}>
                  <img
                    src={img7}
                    style={{ width: 51, marginLeft: 24, marginTop: 19 }}
                  />
                  <h6 className="bre mt-2">breaverage</h6>
                </Col>
                <Col md="2" className="abc" style={{ marginLeft: 3 }}>
                  <img
                    src={img8}
                    style={{ width: 51, marginLeft: 24, marginTop: 19 }}
                  />
                  <h6 className="mt-3">Meats &amp;...</h6>
                </Col>
                <Col md="2" className="abc" style={{ marginLeft: 3 }}>
                  <img
                    src={img9}
                    style={{ width: 51, marginLeft: 24, marginTop: 19 }}
                  />
                  <h6>Meats &amp;...</h6>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col md="4">
          <Card className="text-white">
      <Card.Img src={fresher} alt="Card image"  style={{ height: 655 }} />
      <Card.ImgOverlay className="mt-5">
        <Card.Title className="card-title11"><h6>Seafood</h6></Card.Title>
        <Card.Text className="text-uppercase fw-normal">
        <h3>FRESHES
                <span className="fw-bold">Products</span>
                </h3>
        </Card.Text>
        <h3 className="fw-light">every hour</h3>
        <Button variant="danger">Shop Now <span><i className="fa-solid fa-right-long icon" /></span>
        </Button>{' '}
      </Card.ImgOverlay>
    </Card>



        </Col>
        <Col md="8">
          <Row>
            <Col md="4" py-5
              style={{ width: 377, marginTop: "-45px" }}
            >
             <Card className=" mt-5 text-white">
      <Card.Img src={img1} alt="Card image" height="161px" />
      <Card.ImgOverlay>
        <Card.Title className="card-title33"><h3>50% Offer</h3></Card.Title>
        <Card.Text className="card-russo"> <h4>Tasty Mashroom</h4></Card.Text>
        <Button variant="" className="newbt">Shop Now</Button>{' '}
      </Card.ImgOverlay>
      </Card>
            </Col>
            <div
              className="col-md-4 py-5"
              style={{ width: 367, marginTop: "-45px" }}
            >
               <Card className=" text-white">
      <Card.Img src={img3} alt="Card image" height="161px" />
      <Card.ImgOverlay>
        <Card.Title className="card-title33"><h3>50% Offer</h3></Card.Title>
        <Card.Text className="card-russo"> <h4>Tasty Mashroom</h4></Card.Text>
        <Button variant="" className="newbt">Shop Now</Button>{' '}
      </Card.ImgOverlay>
      </Card>
            </div>
          </Row>
          <h2>Food Cupboard</h2>
          <img src={leaf}/>
          <p>A Virtual assistant collects the products from your list</p>
          <CardGroup>
      <Card className="card crd-1">
        <Card.Img variant="top"  src={fantacy} />
        <Card.Body>
          <Card.Title><h6>Fantasy Crunchy Choco Chip Cookies</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>


        <Card className="card crd-1">
        <Card.Img variant="top"  src={coffee} />
        <Card.Body>
          <Card.Title><h6> Peanut Butter Bite Premium Butter Cookies 600 g</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>
        <Card className="card crd-1">
        <Card.Img variant="top"  src={snack} />
        <Card.Body>
          <Card.Title><h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6></Card.Title>
          <span className="theme-color">$26.69</span>
                <del>28.56</del>
                <div className="ratings">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#f29f2c" }}
                  />
                  <span className="stock">In Stock</span>
                </div>
                <div className="add-to-cart-box mt-3">
                <Button  className="btn btn-add-cart addcart-button"
                    tabIndex={0} variant="gray"
                     >
                       Add
                    <span className="add-icon">
                      <i className="fa-solid fa-plus" />
                    </span>
                      
                      
                      </Button>{' '}
                      <div className="cart_qty qty-box"></div>
                  </div>
        </Card.Body>
        </Card>
    </CardGroup>
        </Col>
      </Row>
    </Container>
  </Container>
  <Container>
    <Row>
      <Col md="4" className="mt-5" >
      <Card className="text-white">
      <Card.Img src={vegies} alt="Card image" />
      <Card.ImgOverlay className="mt-5">
        <Card.Title className="card-title11"><h4>Organic</h4></Card.Title>
        <Card.Text className="card-text1"><h2>FRESH</h2></Card.Text>
        <Card.Text className="card-text2"><h2>VEGETABLES</h2></Card.Text>
        <small className="super">Super offer to 50% off</small>
        <div className="mt-5">
        <Button variant="danger">Shop Now <span><i className="fa-solid fa-right-long icon" /></span>
        </Button>{' '}
        </div>
      </Card.ImgOverlay>
    </Card>
 </Col>



      {/* GreenPIC */}
      <Col className="mt-5" md="8">
        <Card className="text-white">
      <Card.Img src={greenpic} alt="Card image" style={{ height: 152 }} />
      <Card.ImgOverlay>
        <Card.Title className="card-title44 text-center"><h3>Get $3 Cashback! Min Order of $30</h3></Card.Title>
        <Card.Text className="coupon-code text-center"><h6>Use Code : GROCERY1920</h6></Card.Text>
      </Card.ImgOverlay>
    </Card>


{/* Orange Pic */}
      <Card className="text-white mt-5">
      <Card.Img src={orange} alt="Card image" style={{ height: 242 }} />
      <Card.ImgOverlay>
        <Card.Title className="orange-theme20"><h2>Get Ready To</h2></Card.Title>
        <Card.Text className="mt-2 mb-3 take-on"><h3>TAKE ON THE DAY!</h3></Card.Text>
        <p className=" text-content22">
              In publishing and graphic design, Lorem ipsum is a <br />
              placeholder text commonly used to demonstrate
            </p>
            <Button variant="danger">Shop Now <span><i className="fa-solid fa-right-long icon" /></span>
        </Button>{' '}
      </Card.ImgOverlay>
    </Card>


    <Card className="text-white mt-5">
      <Card.Img src={bottle} alt="Card image" style={{ height: 170 }} />
      <Card.ImgOverlay>
        <Card.Title className="bottel text-danger"><h2>20% Off</h2></Card.Title>
        <Card.Text className="summry"><h3>SUMMRY</h3></Card.Text>
        <Card.Text className="p-name"><h3>Product</h3></Card.Text>
      </Card.ImgOverlay>
    </Card>


        {/* Best Seller */}
        <div className="mt-5">
          <h3>Our Best Seller</h3>
          <img src={leaf} />
          <p>A virtual assistant collects the products from your list</p>
        </div>
        <Container>
          <Row className=" mt-5">
            <Col md="4"
              className="border"
              style={{ width: 356, borderRadius: 12 }}
            >
              <div className="mb-3 mt-4" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={bread}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 11, marginTop: 34 }}
                    />
                  </Col>
                  <Col md="8" className=" bdotted">
                    <Card.Body>
                    <Card.Title className="card-title"><h5>Tuffets Britannia...</h5></Card.Title>
                    <Card.Text className="card-text"><p>500g</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
              <div className="mb-3" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={potato}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 5, marginTop: 40, width: 83 }}
                    />
                  </Col>
                  <Col md="8" className="bdotted">
                  <Card.Body>
                    <Card.Title className="card-title"><h5>Potato</h5></Card.Title>
                    <Card.Text className="card-text"><p>500g</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
              <div className="mb-3" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={greenchili}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: "-6px", marginTop: "-6px" }}
                    />
                  </Col>
                  <Col md="8" className="bdotted">
                  <Card.Body>
                    <Card.Title className="card-title"><h5>Green Chilli</h5></Card.Title>
                    <Card.Text className="card-text"><p>200 g</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
              <div className="mb-3" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={burger}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 18, marginTop: 7 }}
                    />
                  </Col>
                  <Col md="8">
                  <Card.Body>
                    <Card.Title className="card-title"><h5>Muffets Burger Bun</h5></Card.Title>
                    <Card.Text className="card-text"><p>300 g</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="4"
              className=" border"
              style={{ width: 356, marginLeft: 24, borderRadius: 12 }}
            >
              <div className="mt-4 mb-3" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={cheeza}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 14, marginTop: 12, width: 83 }}
                    />
                  </Col>
                  <Col md="8" className="bdotted">
                  <Card.Body>
                    <Card.Title className="card-title"><h5>Muffets Britannia...</h5></Card.Title>
                    <Card.Text className="card-text"><p>500g</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
              <div className="mb-3" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={toned}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 40, marginTop: 10, width: 36 }}
                    />
                  </Col>
                  <Col md="8" className="bdotted">
                  <Card.Body>
                    <Card.Title className="card-title"><h5>Life Long Tonned Milk</h5></Card.Title>
                    <Card.Text className="card-text"><p>1 L</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
              <div className="mb-3" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                  <Col md="4">
                    <img
                      src={tomato}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 14, marginTop: 30 }}
                    />
                  </Col>
                  <Col md="8" className="bdotted">
                  <Card.Body>
                   <Card.Title className="card-title"><h5>Orange Jam</h5></Card.Title>
                  <Card.Text className="card-text"><p>1 L</p></Card.Text>
                 <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                 </Card.Body>
                  </Col>
                </Row>
              </div>
              <div className="mb-3" style={{ maxWidth: 540 }}>
                <Row className=" g-0">
                  <Col md="4">
                    <img
                      src={jam}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ marginLeft: 40, marginTop: 27 }}
                    />
                  </Col>
                  <Col md="8">
                  <Card.Body>
                    <Card.Title className="card-title"><h5>Organic Jam</h5></Card.Title>
                    <Card.Text className="card-text"><p>500g</p></Card.Text>
                    <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
                   </Card.Body>
                  </Col>
                </Row>
              </div>
            </Col>

              <Card className="text-white mt-5">
      <Card.Img src={summerveg} alt="Card image" style={{ height: 175 }} />
      <Card.ImgOverlay>
        <Card.Title className="mb-sm-3 mb-1 orange-theme text-center"><h6>SUMMER</h6></Card.Title>
        <Card.Text className="banner-title text-center"><h1>VEGETABLE</h1></Card.Text>
        <Card.Text className="mt-1 text-content text-center"><h5>Save up to 5% OFF</h5></Card.Text>
      </Card.ImgOverlay>
    </Card>
            
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>

  
  <Col md="4" className="border bg-light"
    style={{
      width: 356,
      marginLeft: 115,
      borderRadius: 12,
      marginTop: "-580px"
    }}
  >
    <div className="mx-4 underline1" style={{ width: 199 }}>
      <h4 className="mt-5">Trending Products</h4>
    </div>
    <div className="mt-5 mb-3" style={{ maxWidth: 540 }}>
      <Row className="g-0">
        <Col md="4">
          <img
            src={canned}
            className="img-fluid rounded-start"
            alt="..."
            style={{ marginLeft: 26, marginTop: 5, width: 72 }}
          />
        </Col>
        <Col md="8" className="bdotted">
        <Card.Body>
        <Card.Title className="card-title"><h5>Tuffets Britannia...</h5></Card.Title>
        <Card.Text className="card-text"><p>500g</p></Card.Text>
        <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
      </Card.Body>
        </Col>
      </Row>
    </div>
    <div className="mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={dates}
            className="img-fluid rounded-start"
            alt="..."
            style={{ marginLeft: 30, marginTop: 5, width: 56 }}
          />
        </div>
        <div className="col-md-8 bdotted">
        <Card.Body>
        <Card.Title className="card-title"><h5>Long Life Toned Milk</h5></Card.Title>
        <Card.Text className="card-text"><p>1 L</p></Card.Text>
        <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
      </Card.Body>
        </div>
      </div>
    </div>
    <div className="mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={kernels}
            className="img-fluid rounded-start"
            alt="..."
            style={{ marginLeft: 26, marginTop: 5, width: 72 }}
          />
        </div>
        <div className="col-md-8 bdotted">
        <Card.Body>
        <Card.Title className="card-title"><h5>Organic Tomato</h5></Card.Title>
        <Card.Text className="card-text"><p>1kg</p></Card.Text>
        <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
      </Card.Body>
        </div>
      </div>
    </div>
    <div className="mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={apple}
            className="img-fluid rounded-start"
            alt="..."
            style={{ marginLeft: 26, marginTop: 5, width: 72 }}
          />
        </div>
        <div className="col-md-8">
        <Card.Body>
        <Card.Title className="card-title"><h5>Orgainc Jam</h5></Card.Title>
        <Card.Text className="card-text"><p>150gm</p></Card.Text>
        <Card.Text className="color-brand-2"><h6>$ 10.00</h6></Card.Text>
      </Card.Body>
        </div>
      </div>
    </div>
  </Col>
  {/* Trending Category */}
  <Container>
    <Row className="g-sm-4 g-3">
      <Col xxl="3" xl="4" className="bg-light d-done d-xl-block"
        style={{ marginTop: 99, height: 401, borderRadius: 15 }}
      >
        <div className="category-menu;">
          <h5 className="category underline1 p-3" style={{ width: 215 }}>
            Customer Comment
          </h5>
          <h6 className="care p-2">We Care About Our Customer Experience</h6>
          <p className="p1 p-4">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <Col md="4" className="mt-4" style={{ width: 700 }}>
            <Row className="g-0">
              <Col md="2" style={{ marginLeft: 22 }}>
                <img src={girl} alt="" width="62px" />
              </Col>
              <Col md="4"  style={{ marginLeft: "-41px" }}>
                <h5>Tina Mcdonnale</h5>
                <h6 className="sale">Sale Manager</h6>
              </Col>
            </Row>
          </Col>
        </div>
      </Col>
      <Col xxl="9" xl="8"style={{ marginTop: 122 }}>
        <Row>
          <div>
            <h3>Top Save Today</h3>
            <img src={leaf}/>
            <p>
              Don't miss this opportunity at a special discount just for this
              week
            </p>
          </div>
        </Row>
        <Row>
          <Col md="4"
            className="py-5"
            style={{ width: 377, marginTop: "-45px" }}
          >
            <div className="  text3">
              <img
                src={lemon}
                className="card-img"
                alt="..."
                height="211px"
              />
              <h6>20 March, 2023</h6>
              <h5>Fresh vegetable Online</h5>
            </div>
          </Col>
          <Col md="4"
            className="py-5"
            style={{ width: 367, marginTop: "-45px" }}
          >
            <div className="text4">
              <img
                src={lemon2}
                className="card-img"
                alt="..."
                height="211px;"
              />
              <h6>20 March, 2023</h6>
              <h5>Fresh vegetable Online</h5>
            </div>
          </Col>
        </Row>
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
    );
}
export default Home;