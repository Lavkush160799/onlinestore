import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img4 from "./images/OIP.jpeg";
function Navbar() {
  const userdata=JSON.parse(localStorage.getItem("TOKEN"))
  const navigate = useNavigate();
  const HandelLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "success",
      text: "Log-Out successfully",
      icon: "success",
      confirmButtonText: "ok",
    });
    navigate("/Login1");
  };
  const Handelcart = (e) => {
e.preventDefault();
navigate("/cartitemsnmms")
  }
  return (
    <>
      <nav id="main-nav" className="tranformclassName">
        <div className="left-menu">
          <div className="nav-logo">
            <span className="logo-s">
              {" "}
              <Link to="/"></Link>Shop
            </span>
            <span>
              {" "}
              <Link to="/onlinestore">lane</Link>{" "}
            </span>
          </div>

          <a
            className="clothing-menu-a"
            href="#mens-and-womens-clothing-section"
          >
            <Link to="/clothing">Clothing</Link>
          </a>
          <a className="Accessories-menu-a" href="#accesserios-section">
            <Link to="/access">Accessories</Link>
          </a>
        </div>
        <div className="mid-menu">
          <i className="fa fa-search"></i>

          <input className="input-field" type="text" placeholder="Search..." />
        </div>
        <div className="right-menu">
          <div className="cart-wrapper">
            <p className="cart-acount">0</p>
            <a href="#">
              <i className="fa fa-shopping-cart" onClick={Handelcart}></i>
            </a>
          </div>
          <div>
            <a>
              <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img style={{ borderRadius: "20px" }} src={img4} />{" "}
              </button>
            </a>
          </div>
          <div className="mx-4">
            <button className="btn btn-outline-primary" onClick={HandelLogout}>
              Log-Out
            </button>
          </div>
        </div>
      </nav>

      {/* 
<!-- Modal --> */}
      <div
        className=" modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className=" card-container modal-content">
            <div className="modal-header">
              <h5
                style={{
                  color: "black",
                  fontSize: "3rem",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "1px auto",
                }}
                className="modal-title"
                id="staticBackdropLabel"
              >
                Profile
              </h5>
            </div>
            <div className="modal-body style profile-card">
              <h2 className="profile-card">
                Your Name : <span>{userdata.username}</span>
              </h2>
              <br></br>
              <h2>
                Mobile No : <span>8410657252</span>
              </h2>
              <br></br>
              <h4>
                Email Id : <span>{userdata.email}</span>
              </h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
