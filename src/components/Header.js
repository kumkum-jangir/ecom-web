import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import img0 from '../Assets/Images/logo.png';
import img from '../Assets/Images/united-states.png';
import '../Assets/Css/styles.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import TestiMonials from './TestiMonials/TestiMonials';
import axios from "axios";


function Header(){

  const [category, allCategory]=useState([]);
  const [search, searchDetails]=useState([]);
  const [categories, getCategories]=useState([]);


  // API for Category Items

  const categoryItems=()=>{
    const baseURL = "https://dummyjson.com/products/category/smartphones";
    axios.get(baseURL).then((response)=> {
      getCategories(response.data.products);
    });
  }


  // API for Category
  useEffect(()=>{
 
    const baseURL = "https://dummyjson.com/products/categories";
     axios.get(baseURL).then((response)=> {
         
      allCategory(response.data);
    

     });
},[]);

  // API for Search Any Products
  const searchProducts=(id)=>{
    const baseURL = "https://dummyjson.com/products/search?q=Laptop"+id;
    axios.get(baseURL).then((response)=> {
      alert("abc");
        searchDetails(response.data.products);
    });
  }

    const banner={
        height:"30px",
        maxWidth:"29px"
    };
    return(
        <>



 <div className="head">
    <Container>
      <Row>
        <Col md="10" className="text pt-3 d-flex justify-content-start">
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
        <img src={img0} className="img-fluid p-3"
          style={{ maxWidth: 209, marginLeft: "-69px" }}
        />
      </Col>
      <Col md="2" sm="12" className="locate w-5"
        style={{ marginLeft: "-42px" }}
      >
        <button
          className="btn location-button border my-3 mx-2"
          style={{ height: 53, width: 157 }}
        >
          <i className="fa-solid fa-location-dot bg-light" />
          <span className="location-arrow" />
          <span className="locat-name">Your Loaction</span>
          <i className="fa-solid fa-angle-down" />
        </button>
      </Col>
     
      
      <Col md="5" style={{ height: 52, marginLeft: "-147px" }}>
        <div className="input-group py-3 px-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="search"
            style={{ height: 53 }}
          />
          <button
          
            className="btn btn-secondary"
           onClick={searchProducts}
            type="button"
            style={{ width: 70, marginRight: "-182px" }}
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </Col>
       
      
      <Col md="3" className="pt-3" style={{ width: 237, paddingLeft: 40 }}>
        <i
          className="fa-solid fa-phone mx-2 border-end border-2"
          style={{ height: 40, width: 30, fontSize: 23, marginTop: 9 }}
        />
        <i
          className="fa-regular fa-heart mx-2 border-end border-2"
          style={{ height: 40, width: 30, fontSize: 23 }}
        />
        <i
          className="fa-solid fa-cart-shopping mx-2 border-end border-2"
          style={{ height: 40, width: 30, fontSize: 23 }}
        />
        <i
          className="fa-regular fa-user mx-2 border-end border-2"
          style={{ height: 40, width: 30, fontSize: 23 }}
        />
      </Col>
    </Row>
  </Container>
  
  <Container className="py-2">
    <Row>

      <Col md="2" className="mx-1 px-2 mt-5">
      <DropdownButton className="" variant="" id="dropdown-item-button" title="All Categories"  >
       {category.map((value)=>(
          
      <Dropdown.Item href="#">
        <Link to={`/CategoryProducts/${value}`} style={{textDecoration:'none'}}>{value}</Link>
      </Dropdown.Item>
       
      ))}
    </DropdownButton>
      </Col>

      <Col md="8" className="mx-3 text-end mt-1 py-2">
        
      <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <NavDropdown title="Home" id="basic-nav-dropdown">
                     
<LinkContainer to="/Fashion">
      <Nav.Link>Fashion</Nav.Link>  
   </LinkContainer>
   <LinkContainer to="/Practice">
      <Nav.Link>Practice</Nav.Link>  
   </LinkContainer>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <LinkContainer to="/TestiMonials">
      <Nav.Link>TestiMonials</Nav.Link>  
   </LinkContainer>
            </NavDropdown>
           <NavDropdown title="Shop" id="basic-nav-dropdown">
           <NavLink className="nav-link" to="/Shop">
                  Shop
                </NavLink>
                <NavLink className="nav-link" to="/countinc">
                  Count
                </NavLink>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavLink className="nav-link" to="/App">
                  App
                </NavLink>
            </NavDropdown>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavLink className="nav-link" to="/Product">
                  Product
                </NavLink>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
             <NavDropdown title="Mega Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
             <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
             <NavDropdown title="Pages" id="basic-nav-dropdown">
             <LinkContainer to="/About">
                <Nav.Link> About</Nav.Link> 
                </LinkContainer>
                <LinkContainer to="/Contact">
                <Nav.Link> Contact</Nav.Link> 
                </LinkContainer>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
             <NavDropdown title="Seller" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Col>
</Row>
</Container>

</>

    )
}
export default Header;