import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Sign1() {
  const navigate=useNavigate();
  const [count, setCount] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelsumbit = (e) => {
    e.preventDefault();
    if (count.username === "") {
      Swal.fire({
        title: 'Error!',
        text: 'username is required',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    } else if (count.email === "") {
      Swal.fire({
        title: 'Error!',
        text: 'email is required',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    } else if (count.email.indexOf("@") <= 0) {
      Swal.fire({
        title: 'Error!',
        text: 'email is invalid',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    } else if (
      count.email.charAt(count.email.length - 4) != "." &&
      count.email.charAt(count.email.length - 3) != "."
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'email is invalid',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    } else if (count.password === "") {
      Swal.fire({
        title: 'Error!',
        text: 'password is required',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      return;
    } else {
      Swal.fire({
        title: 'success',
        text: 'sign successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      })
    }
    localStorage.setItem(`TOKEN`,JSON.stringify(count))
    navigate("/Login1")
    setCount({
      username: "",
    email: "",
    password: "",
    })
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
      <div className="main">
        <div class="signupFrm">
          <form action="" class="form" onSubmit={handelsumbit}>
            <h1 class="title">Sign-in</h1>

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
                type="text"
                name="email"
                class="input"
                placeholder="a"
                value={count.email}
                onChange={updateField}
              />
              <label for="" class="label">
                Email
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

            <Link to="/Login1">Already Have An Account</Link>
            <input type="submit" class="submitBtn" value="Sign up" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Sign1;