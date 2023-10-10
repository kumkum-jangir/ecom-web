import React, {useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import greenimg from '../Assets/Images/greenimg.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import about from '../Assets/Images/about-2.jpg';
import Swal from 'sweetalert2';
import axios from "axios";

function Contact(){

const [formData,setFormData]= useState({
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  phone: "",
  textarea:"",
})


const handleChange = (e) => {
  const value = e.target.value;
  setFormData({
    ...formData,
    [e.target.name]: value
  });
};


const handleSubmit1 = (e) => {
  e.preventDefault();
  const userData = {
    firstname: formData.firstname,
    lastname: formData.lastname,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
    textarea: formData.textarea,
  };
  axios.post("https://reqres.in/api/users", userData)
.then((response) => {
  console.log(response);
  Swal.fire(
    'Good job!',
    'Registration Successful',
    'success'
  )
  });
};







  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



    const [color, setColor] = useState("yellow");
    const [font, fontValue] =useState("");
    const [count, setCount] = useState(0);




    useEffect (()=>{
        document.getElementById("new").style.backgroundColor= color; 
       
            document.getElementById("new").style.fontSize= font;

            // setTimeout(()=>{
            //   setCount(count=> count+1)
            // },1000);

    });

    function img(){
        document.getElementById("image").style.backgroundImage = "url('https://www.google.com/logos/doodles/2023/altina-schinasis-116th-birthday-6753651837110158.2-s.png')";
    }

    function img1(){
        document.getElementById("image").src = "https://d2dwxeidp9b9gl.cloudfront.net/images/products/1685013730135Marko%20Sheesham%20Wood%20Queen%20Size%20Bed%20with%20Storage%2002.jpg";
    }

   

    return(
<>



<button  type="button" onClick={() => setColor("blue")}>Blue</button>

{/* <button  type="button" onClick={() => fontValue("60px")}>size</button> */}
    <div id="new">
        button
    </div>

{/* <div>
   <h4>when you clicked on the button counting will start {count}</h4> 
<button onClick={() => setCount(count+1)}>Click Here</button>
</div> */}

<button onClick={()=>setCount(count+1)}>Count {count}</button>

<button type="button" onClick={()=> {img()}}>Image</button>
<button type="button" onClick={()=>{img1()}}>Image1</button>

<div id="image"></div>

    <div id="image1">
    </div>
 
<br></br>

<Container fluid className="bg-light h-100">
    <Container style={{ height: 94 }}>
      <Row>
        <Col md="6" className="mt-4">
          <h5 className="shop"><b>Contact Us</b></h5>
          <div></div>
        </Col>
        <Col md="6" className="mt-4">
          <nav>
            <ol className="breadcrumb mb-0  d-flex justify-content-end">
              <li className="b-item">
                <i className="fa-solid fa-house" />{" "}  
                <i className="fa-solid fa-angle-right" />
              </li>
              <li className="b-item active">Contact Us</li>
            </ol>
          </nav>
        </Col>
      </Row>
    </Container>
  </Container>

<Container>
<Row>
<Col md="6">
    <img src={greenimg} className="greenimg"></img>

    <h3 className="mt-5 greenline">Get In Touch</h3>

    <div className="contact-details mt-5">
        <Row>
            <Col xxl-6 lg-12 sm-6>
           <div className="contact-icon1 bg-light">
            <div className="contact-icon">
                    <i className="fa-solid fa-phone phicon"></i> 
                    </div>
                <div className="contact-title">
                    <h4>Email</h4>
                    <p>getweto9078@gmail.com</p> 
                    </div>  
                   </div>

                   <div className="contact-icon1 mt-5 bg-light">
            <div className="contact-icon">
            <i className="fa-solid fa-envelope phicon"></i>
                    </div>
                <div className="contact-title">
                    <h4>Email</h4>
                    <p>getweto2344@gmail.com</p> 
                    </div>  
                   </div>
                   

                   <div className="contact-icon1 mt-5 bg-light">
            <div className="contact-icon">
                <i className="fa-solid fa-location-dot phicon"></i>
                    </div>
                <div className="contact-title">
                    <h4>Germany Office</h4>
                    <p>Vistacion de la Encina 22</p> 
                    </div>  
                   </div>

               </Col>
        </Row>
    </div>
</Col>

<Col md="6">
<h2 className="contactme mt-5">Contact Us</h2>
    <div className="formbg mt-4">
   


<Form noValidate validated={validated} onSubmit={handleSubmit1}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
      <div className="newname">
      <i className="fa-solid fa-user usericonn"></i>
      <Form.Control required type="text" name="firstname" className="last1" value={FormData.firsename}  onChange={handleChange} placeholder="Enter First Name" />
      </div>
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Last Name</Form.Label>
      <div className="newname"> 
      <i className="fa-solid fa-user usericonn"></i>
      <Form.Control required type="text" name="lastname" className="last1" onChange={handleChange}  value={FormData.lastname}   placeholder="Enter Last Name" />
      </div>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email Address</Form.Label>
      <div className="newname"> 
      <i className="fa-solid fa-envelope usericonn"></i>
      <Form.Control required type="email" name="email" className="last1" onChange={handleChange}  value={FormData.email}   placeholder="name@gmail.com" autoFocus/>
      </div>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Mobile Number</Form.Label>
      <div className="newname"> 
      <i className="fa-solid fa-mobile-screen usericonn"></i>
      <Form.Control required type="tel" name="phone" pattern="[789][0-9]{9}" onChange={handleChange}  value={FormData.phone}  className="last1"  placeholder="Enter Your Mobile Number" />
      </div>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
        <Form.Label>Message</Form.Label>
        <div className="newname"> 
        <i className="fa-solid fa-message usericonn"></i>
        <Form.Control  as="textarea" name="textarea" className="last1" onChange={handleChange}  value={FormData.textarea}  placeholder="Enter Your Message" rows={3} required/>
        </div>
      </Form.Group>
      <Button type="submit" className="sendbtn" variant="">Send Message</Button>
    </Form>

    </div>
</Col>

</Row>
</Container>





<Container fluid className="mt-5"> 
<Col md="12">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36646.58399707072!2d75.74620089264819!3d26.879676200588552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691043836955!5m2!1sen!2sin"
  width={1300}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</Col>
</Container>


</>
    );
}
export default Contact;