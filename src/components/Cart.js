import React, { useState, useEffect } from "react";
import '../style.css';
import { Button, Card, Container, Row, Col,ListGroup} from 'react-bootstrap';
import axios from "axios";
import Image from 'react-bootstrap/Image';
import {Route, Link, useParams } from 'react-router-dom'; 

function Cart(){
    const [scrolled, setScrolled] = useState(false);
    const [Home,setHome]= useState({});
    const a=0
    const [count,setcount] = useState(a);
    const params = useParams();

    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setHome(response.data);
        // console.log(response)
      })
      .catch((error) => {
        console.error('error founded:', error);
      })
  }, [params.id]);


 

  const bannerStyle = {
    backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 50%), url("./images/banner.jpg")', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '60vh',
  };

    return(
        <div>
               <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? 'navbar-light bg-light shadow' : 'navbar-light'} p-md-3`}>
        <div className="container mt-2">
          <a className={`navbar-brand ${scrolled ? 'text-dark' : 'text-dark'}`} href="#">
            <b>i-Kart</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex justify-content-center align-item-center mx-auto">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className={`ms-5 nav-link ${scrolled ? 'text-dark' : 'text-dark'}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`ms-5 nav-link ${scrolled ? 'text-dark' : 'text-dark'}`}
                    to="/Products"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`ms-5 nav-link ${scrolled ? 'text-dark' : 'text-dark'}`}
                    to="/About"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`ms-5 nav-link ${scrolled ? 'text-dark' : 'text-dark'}`}
                    to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item ms-3 mb-2">
                  <Button variant="outline-dark">Login <i class="fa fa-signin"></i></Button>
                </li>
                <Link to="/Cart">
                  <Button className="ms-3" variant="outline-dark">Cart <i className="fa fa-shopping-cart"></i></Button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav><br></br><br></br>

      <Container>
        <Row>
          <Col className="mt-5">
            <h1 className="latest">Cart</h1>
          </Col>
        </Row>
        <hr></hr>
        <Row>
        <Row className="mt-5 ">
              <Col>
                <Row className="custom-border ms-3 mt-3">
                  <Col  lg={6} >
                    <Image className="card-image" src={Home.image} fluid/>
                  </Col >
                  <Col  lg={6} className="prizepart">
                    <div className="card-body mt-5">
                      <h5 className="ctitle text-start">{Home.title}</h5>
                      {/* <p className="text-start">{Home.description}</p> */}
                      <Row>
                        <h3 className="text-start">$ {Home.price}</h3>
                      </Row>
                      {/* <h4 className="text-start">
                        <span className="badge bg-success badge">{Home.rating.rate}<span className="fa fa-star ms-2"></span></span>
                      </h4> */}
                      <div className="star text-start">
                        <span className="fa fa-star checked "></span>
                        <span className="fa fa-star checked ms-2"></span>
                        <span className="fa fa-star checked ms-2"></span>
                        <span className="fa fa-star checked ms-2"></span>
                        <span className="fa fa-star checked ms-2"></span>
                      </div>
                      <div className="quantity-button d-flex justify-content-start">
                        <button onClick={()=>{if(count>1){setcount(count-1)}}} className="quantity-button__button">
                          -
                        </button>
                        <span className="quantity-button__quantity">{count}</span>
                        <button onClick={()=>setcount(count+1)} className="quantity-button__button">
                          +
                        </button>

                        <span className="ms-5  ctitle">Total Prize : $ {Home.price * count}  </span>
                      </div>
                      <Row>
                        <Col className="text-start">
                          <Button className="ms-1 mt-3" variant="danger">Buy Now </Button>
                          <Link >
                            <Button className="ms-2 mt-3 text-white" variant="warning"><i class="fa fa-shopping-cart text-white"></i> Add to Cart</Button>
                          </Link>

                        </Col>
                      </Row>


                    </div>
                  </Col>
                </Row>

              </Col>
          
        </Row>
        </Row>
      </Container>
    

   
          <footer className="text-center text-white mt-5" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-google"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        © 2023 Copyright : 
        <Link className="text-dark" to="">Midhun Raj</Link>
      </div>
    </footer>
        
      
          
        </div>
    )
}

export default Cart;