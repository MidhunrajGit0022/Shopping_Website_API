import React, { useState, useEffect } from "react";
import '../style.css';
import { Button, Card, Container, Row, Col,ListGroup} from 'react-bootstrap';
import axios from "axios";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom'; 

function About(){
    const a=0;
    const [Home, setHome] = useState([]);
    const [scrolled, setScrolled] = useState(false);
    const [count,setcount]= useState(a)

    
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
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setHome(response.data);
        // console.log(Home)
      })
      .catch((error) => {
        console.error('error founded:', error);
      })
  }, []);

  

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
            <h1 className="latest">About Us</h1>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <div className="mt-3">
            <p className="aboutp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nostrum facere doloremque veritatis odit similique sequi.
             Odit amet fuga nam quam quasi facilis sed doloremque saepe
              sint perspiciatis explicabo totam vero quas provident ipsam, 
              veritatis nostrum velit quos recusandae est mollitia esse fugit
               dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium,
                doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus
                 ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam
                  sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis
                   est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit 
                   delectus expedita a alias nam recusandae illo debitis repellat libero, quasi
                    explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos
                     blanditiis excepturi harum numquam vel nihil? Ipsum
                </p>
          </div>
        </Row>
      </Container>

     
   
          <footer className="text-center fixed-bottom text-white mt-5" style={{ backgroundColor: '#f1f1f1' }}>
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

export default About