
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

function CategoryProducts() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [productsData, getProducts]=useState([]);
  const [details, getDetails]=useState([]);
  
  var url=window.location.href;
  const segment = url.substring(url.lastIndexOf('/')+1);
  const category = useParams();

 // API for Get Details to Single Product 

   const clickOn=(id)=>{
    const baseURL = "https://dummyjson.com/products/"+id;
     axios.get(baseURL).then((response)=> {
         
      getDetails(response.data);

      handleShow();
    },[]);
  }

  // API for All Products

  useEffect(()=>{
    const baseURL = "https://dummyjson.com/products/category/"+category.id;

  axios.get(baseURL).then((response)=> {
    console.log(response.data);

    getProducts(response.data.products);
  });

},[category]);


  return (
    <>
    <Container className="mt-5">
    <Row className="row-cols-1 row-cols-md-3 g-4">
      
  {productsData.map((item,index)=>(

      <Col>
      <Card className="bg-light" style={{ width: '22rem' }}>
      <Card.Img className="snacks" variant="top" src={item.thumbnail}/>
      <Card.Body>
        <Card.Title className="nam"><span>{item.title}</span><span> {values.map((v, idx) => (
        <Button  key={idx} className="vieww" onClick={() => clickOn(item.id)}>
          <i className="fa-regular fa-eye"></i>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}</span> 
     
    </Card.Title>
        <Card.Text className="card-title">
        <h6>{item.description}</h6>
        </Card.Text>
        <div className="ratings">
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-regular fa-star" style={{ color: "#f29f2c" }} />
              <span className="stock">{item.rating}</span>
            </div>
            <span>{item.brand}</span>
            <h6>
              <span className="stock"> {item.price} </span>
              <del> {item.discountPercentage} </del>
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
            </h6>
          
      </Card.Body>
    </Card>
    
   
</Col>
 ))}
    </Row>
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      
        <Modal.Body>
        <Col md="12">
          <Row>
          <Col md="6">
            <img src={details?details.thumbnail:null} className="cake"></img>
          </Col>
          <Col md="6">
            <h4 className="titttle">{details?details.title:null}</h4>
            <h4 className="ppr">{details?details.price:null}</h4>

            <div className="ratings">
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star" style={{ color: "#f29f2c" }} />
              <i className="fa-regular fa-star" style={{ color: "#f29f2c" }} />
              <span className="stock12"> 8 Reviews  <span className="st12">6 sold in last 6 hours</span></span>
            </div>
            <hr></hr>

            <h3>Product Details: </h3>
            <p className="candy">{details?details.description:null}</p>
              <div className="aa">
                  <p className="black-f">Brand Name : <span ><b>Black Forest</b></span></p> 
             
                  <p className="black-f">Product Code: <span><b>W0690034</b></span></p>
                  
                  <p className="black-f">Product Type :  <span><b>White Cream Cake</b></span></p>
                  
                  </div>

                 <hr></hr>
          
          <div className="check-s">
          <Col md="10">
            <Row>
              <Col md="3">
                <h6>Check Size :</h6>
              </Col>
              <Col md="5">
              <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="check-size">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1 KG</Dropdown.Item>
        <Dropdown.Item href="#/action-2">1/2 KG</Dropdown.Item>
        <Dropdown.Item href="#/action-3">1.5 KG</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Red Rose</Dropdown.Item>
        <Dropdown.Item href="#/action-5">With Pink Roses</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </Col>
            </Row>
          </Col>
          </div>  

          <Col className="mt-3">
          <Button className="vv" variant="">Add To Cart</Button>{' '}
          <Button className="vw" variant="">View More Details</Button>{' '}
          </Col>
          </Col>

        
          
          </Row>
        </Col>
        </Modal.Body>
     
    </Modal>
  </Container>

  
    </>
  )
}

export default CategoryProducts;