import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Assets/Css/styles.css';
import new1 from '../Assets/Images/new1.jpg';
import new2 from '../Assets/Images/new2.jpg';
import new3 from '../Assets/Images/new3.jpg';
import new4 from '../Assets/Images/new4.jpg';
import new5 from '../Assets/Images/new5.jpg';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Product() {

  // const [data, setData]=useState([]);
  // const [details, getDetails]=useState([]);
  // const getList=()=>{
  // //   const baseURL = "https://reqres.in/api/products";

  // //   axios.get(baseURL).then((response)=> {
  // //     setData(response.data.data);
  // //   });
  // // }


 
  // const getdata=()=>{
  //   const baseURL = "https://reqres.in/api/products/2";

  //   axios.get(baseURL).then((response)=> {
  //     getDetails(response.data.data);
  //   });
  // }


  // useEffect(()=>{
  //     const baseURL = "https://jsonplaceholder.typicode.com/posts";

  //   axios.get(baseURL).then((response)=> {
  //     setData(response.data);
  //   });
  
  // },[]);

  return (
 <>


{/* <table>
  <tr><th>userId</th><th>id</th><th>Title</th><th>Body</th></tr>
  {data.map((item,index)=>(
    <tr>
<td>{item.userId}</td>
<td>{item.id}</td>
<td>{item.title}</td>
<td>{item.body}</td>
</tr>
  ))}
</table>

<h2>Product Details</h2>
<ul>
  <li>Name: {details.name}</li>
  <li>Name: {details.color}</li>
  <li>Name: {details.pantone_value}</li>
  <li>Name: {details.year}</li>

</ul> */}

{/* <form>
  <input type="button" onClick={getdata} name="test" value="Details"></input>
</form> */}

{/* <form>
  <input type="button" onClick={getList} name="test" value="submit"></input>
</form> */}

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

<div className='mt-5'>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src={new1}></img></SwiperSlide>
        <SwiperSlide><img src={new2}></img></SwiperSlide>
        <SwiperSlide><img src={new3}></img></SwiperSlide>
        <SwiperSlide><img src={new4}></img></SwiperSlide>
        <SwiperSlide><img src={new5}></img></SwiperSlide>
        <SwiperSlide><img src={new1}></img></SwiperSlide>
        <SwiperSlide><img src={new2}></img></SwiperSlide>
        <SwiperSlide><img src={new3}></img></SwiperSlide>
      </Swiper>
      </div>


      <Container fluid-lg md="12">
        <Col xxl-9 xl-8 lg-7>
          <Row g-4>
          <h6 className='percent'>30% Off</h6>
          <h2>Creamy Chocolate Cake</h2>
          <div className="price-rate">
            <h3 className='greencol'>$49.50&nbsp;&nbsp;
            <del className='textnew'>$58.46</del>&nbsp;&nbsp;
            <span className='offe'>(8% off)</span>
           
            <i className="fa-solid fa-star st" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star st" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star st" style={{ color: "#f29f2c" }} />
              <i className="fa-solid fa-star st" style={{ color: "#f29f2c" }} />
              <i className="fa-regular fa-star st" style={{ color: "#f29f2c" }} />
              <span className="stock1"> 23 Customer Review </span>
            
            </h3>

          
             
            
          </div>
          <div className='product-contain mt-3'>
            <p className='nm'>Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread sugar<br></br> plum dessert powder cookie sweet brownie. Cake cookie apple pie dessert<br></br> sugar plum muffin cheesecake.</p>
          </div>
          <hr></hr>

          <div className='bttnn'>
          <Button className='bt1' variant="outline-secondary">1/2 KG</Button>{' '}
      <Button className='bt1' variant="outline-secondary">1 KG</Button>{' '}
      <Button className='bt1' variant="outline-secondary">1.5 KG</Button>{' '}
      <Button className='bt1' variant="outline-secondary">Red Rose</Button>{' '}
      <Button className='btn1' variant="outline-secondary">With Pink Roses</Button>{' '}
          </div>
          </Row>
        </Col>
      </Container>




    </>
  


 




  )
}

export default Product;