import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "./images/Без названия (1).svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const [errLogin, setErrLogin] = useState({
    type: "",
    message: "",
  });

  const { isLogin, setIsLogin } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Foydalanuvchi topilmadi");
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsLogin(true)
        setErrLogin({
          type: "succses",
          message: "Succses",
        });
      })
      .catch((err) => {
        setErrLogin({
          type: "not",
          message: "Foydalanuvchi topilmadi",
        });

        setTimeout(() => {
          setErrLogin({
            type: "",
            message: "",
          });
        }, 3000);
      });
  };

  return (
    <nav>
      <div className="navbar container d-flex justify-content-between align-items-center">
        <div className="navbar__logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar__search input-group " style={{ width: "40%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Mahsulot izlash..."
          />
          <i className="bi bi-search btn btn-outline-secondary"></i>
        </div>
        <div className="navbar__login d-flex justify-content-between align-items-center">
          <div className="ms-5 d-flex align-items-center">
            <i
              className="bi bi-person "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            ></i>
            {!isLogin ? (
              <span
                style={{ cursor: "pointer" }}
                className=" ps-2 fw-medium"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Kirish
              </span>
            ) : (
              <span
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLogin(false);
                }}
                style={{ cursor: "pointer" }}
                className=" ps-2 fw-medium"
              >
                Chiqish
              </span>
            )}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Login
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={formHandler}>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Email
                        </label>
                        <input
                          value={form.email}
                          onChange={(e) => {
                            setForm({
                              ...form,
                              email: e.target.value,
                            });
                          }}
                          type="email"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Password
                        </label>
                        <input
                          value={form.password}
                          onChange={(e) => {
                            setForm({
                              ...form,
                              password: e.target.value,
                            });
                          }}
                          type={"password"}
                          className="form-control"
                          id="message-text"
                        ></input>
                        {errLogin.type === "not" && (
                          <p className="text-center my-3 text-danger">
                            {errLogin.message}
                          </p>
                        )}
                        {errLogin.type === "succses" && (
                          <p className="text-success text-center my-3">
                            {errLogin.message}
                          </p>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-5 d-flex align-items-center">
            <i className="bi bi-heart"></i>
            <span style={{ cursor: "pointer" }} className="ps-2 fw-medium ">
              Saralangan
            </span>
          </div>
          <div className="ms-5 d-flex align-items-center">
            <i className="bi bi-bag-dash "></i>
            <span style={{ cursor: "pointer" }} className="ps-2 fw-medium ">
              Savat
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
