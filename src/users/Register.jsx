import "../index.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from '../redux/action/authActions';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      // Send data as JSON
      const data = {
        name,
        email,
        password,
      };

      dispatch(register(data, navigate));

    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: "120px" }}
    >
      <div className="row w-100 justify-content-center ">
        <div className="col-md-8">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="card-text fw-bold">Register</h4>
              <hr />
              <form onSubmit={registerHandler}>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Nama Lengkap</label>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan Nama Lengkap"
                      />
                    </div>
                    {validation.name && (
                      <div className="alert alert-danger">
                        {validation.name[0]}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">E-mail</label>
                      <input
                        type="email"
                        className="form-control rounded-pill"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan Alamat Email"
                      />
                    </div>
                    {validation.email && (
                      <div className="alert alert-danger">
                        {validation.email[0]}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control rounded-pill"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan Password"
                      />
                    </div>
                    {validation.password && (
                      <div className="alert alert-danger">
                        {validation.password[0]}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-danger rounded-pill">
                  Register
                </button>
                <p className="mt-2">
                  or <Link to="/login" className="text-decoration-none text-dark">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
