import React from "react";
import Swal from 'sweetalert2';
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function Login1() {
  const [count,setCount]=useState({
    username:'',
    password:''
  });
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("TOKEN"))
  const handelsumbit = (e) => {
    e.preventDefault();
    if (!(count.username === token.username)) {
      Swal.fire({
        title: 'Error!',
        text: 'username is invalid',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return false;

    } else if (!(count.password === token.password)) {
      Swal.fire({
        title: 'Error!',
        text: 'password is invalid',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return false;
    } else {
      Swal.fire({
        title: 'success',
        text: 'Login is successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      navigate("/onlinestore")
    }
  };

  const updateField = (e) => {
    const { value, name } = e.target;
    setCount({
      ...count,
      [name]: value,
    });
  };

  
  return (
    <>
      <div className="body">
        <div class="signupFrm">
          <form action="" class="form" onSubmit={handelsumbit}>
            <h1 class="title">Log-in</h1>

            <div class="inputContainer">
              <input
                type="text"
                name="username"
                class="input"
                placeholder="a"
                value={count.username}
                onChange={updateField}
              />
              <label for="" class="label">
                Username
              </label>
            </div>

            <div class="inputContainer">
              <input
                type="password"
                name="password"
                class="input"
                placeholder="a"
                value={count.password}
                onChange={updateField}
              />
              <label for="" class="label">
                Password
              </label>
            </div>
            <Link to="/">Create An A Account</Link>
            <input type="submit" class="submitBtn" value="log in" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Login1;