import axios from "axios";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Carosels from "./Carosels";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Onlinestore() {
  const navigate=useNavigate();
  const token=localStorage.getItem("TOKEN")
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if(token == null){
      navigate("/Login1")
    }
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://62eeca6a8d7bc7c2eb7258b2.mockapi.io/onlinestore`)
      .then((resp) => {
        // console.log("response", resp?.data);
        setData(resp?.data);
      });
  };
  return (
    <>
      <div className="body">
        <i class="fa fa-bars" id="bar"></i>

        <Navbar />
        <h1 className="welcome">WELCOME TO ONLINE STORE</h1>
        <Carosels />

        {data.map((Onlinestoreproducts) => {
          return (
            <>
              <Fade left big>
                <div className="Card">
                  <div className="row">
                    <div class="card inline-flex" style={{ width: "18rem" }}>
                      <img
                        src={Onlinestoreproducts.image}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{Onlinestoreproducts.name}</h5>
                        <p class="card-text">{Onlinestoreproducts.price}</p>
                        <p class="card-text">
                          {Onlinestoreproducts.description}
                        </p>
                        <a href="#" class="btn btn-outline-primary">
                          Add Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </>
          );
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Onlinestore;
