import axios from "axios";
import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Clothing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://62eeca6a8d7bc7c2eb7258b2.mockapi.io/clothing`)
      .then((resp) => {
        setData(resp?.data);
      });
  };
  return (
    <>
    <Navbar/>
      <div className="body">
        <section id="mens-and-womens-clothing-section">
          <div className="clothing">
            <h3 className="clothing">Clothing for Men and Women</h3>
          </div>
          <div class="clothing-grid"></div>
        </section>
        {data.map((clothing) => {
          return (
            <>
              <Fade left big>
                <div className="Card">
                  <div className="row">
                    <div class="card inline-flex" style={{ width: "18rem" }}>
                      <img
                        src={clothing.image}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{clothing.name}</h5>
                        <p class="card-text">{clothing.price}</p>
                        <p class="card-text">{clothing.description}</p>
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

export default Clothing;