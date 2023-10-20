import "../index.css";
// import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Google from "../components/auth/Google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/"); // Redirect to the dashboard if a token is found
    }
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('email', email);
    // formData.append('password', password);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/v1/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      // Check if the login was successful
      if (response.status === 200) {
        // You may need to adjust this status code
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true }); // Corrected route to 'dashboard'
      }

      const { token } = response.data.data;

      localStorage.setItem("token", token);
    } catch (error) {
      // Handle validation errors
      if (error.response && error.response.data) {
        setValidation(error.response.data);
      }
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container-reg d-flex align-items-center mt-5 pt-5">
      <div className="row">
        <div className="column ">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="card-text fw-bold">Login</h4>
              <hr />
              {validation.message && (
                <div className="alert alert-danger">{validation.message}</div>
              )}
              <form onSubmit={loginHandler}>
                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukin e-mail ya, bukan perasaan 😛"
                  />
                </div>
                {validation.email && (
                  <div className="alert alert-danger">
                    {validation.email[0]}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Don't forget to use character(s)!"
                  />
                </div>
                {validation.password && (
                  <div className="alert alert-danger">
                    {validation.password[0]}
                  </div>
                )}
                <div className="button gap-4 mb-2 w-100 d-flex justify-content-center">
                  <button type="submit" className="btn btn-danger rounded-pill">
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger rounded-pill"
                    onClick={goToRegister}
                  >
                    Register
                  </button>
                </div>
                <div className="fw-bold text-danger button w-100 d-flex justify-content-center">
                  <p>or</p>
                </div>
                <div className="button mb-2 w-100 d-flex justify-content-center ">
                  <Google buttonText="Login with Google 🚀" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
