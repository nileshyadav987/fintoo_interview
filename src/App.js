
import React, { useEffect, useState } from "react";
import './App.css';

import Modal from 'react-bootstrap/Modal'

import logo from './thumbnail.svg';


import "bootstrap-icons/font/bootstrap-icons.css";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import OtpInput from 'react-otp-input';


function App() {
  const timer = { maxtime: (20) };
  const [sticky, setSticky] = useState("");
  const [show, setShow] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [otpFrm, setOtpFrm] = useState(false);
  const [otp, setOtp] = useState("");
  const [timerStr, setTimerStr] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");

  const handleClose = () => setShow(false);
  const handleOtpClose = () => {
    setOtpFrm(false);
    clearInterval(timer.obj);
  };
  const handleOtpShow = () => {
    startTimer();
    setOtpFrm(true);
  };

  const handleShow = () => {
    setOpen2(false);
    setShow(true);
    setMobile("");
  }
  const openLoginForm = () => setOpen2(true);

  // on render, set listener
  useEffect(() => {
    // startTimer();
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };

  }, []);

  const startTimer = () => {
    console.log("Im here");
    timer.obj = setInterval(() => {
      setTimerStr(new Date(timer.maxtime * 1000).toISOString().substring(14, 19));
      timer.maxtime = timer.maxtime - 1;
      if (timer.maxtime <= 0) {
        clearInterval(timer.obj);
        setTimerStr("");
      }
    }, 1000);
  }

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "navbar-shrink" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const changeMobile = () => {
    console.log(858585);
    clearInterval(timer.obj);
    setOtpFrm(false);
    setShow(true);
  }

  const stickclasses = `navbar navbar-expand-lg navbar-light fixed-top py-3 ${sticky}`;

  const mobileclasses = `collapse navbar-collapse ${mobileMenu}`;

  return (

    <>
      <nav className={stickclasses} id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top"><img width="100" src={logo} alt="logo" /></a>
          <button onClick={() => mobileMenu ? setMobileMenu("") : setMobileMenu("show")} className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className={mobileclasses} id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item"><a className="nav-link" href="#about">About us</a></li>
              <li className="nav-item" onClick={() => {
                setMobileMenu("");
                handleShow();
              }}><span className="nav-link fk-pointer" >Services</span></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Contact us</a></li>
              <li className="nav-item" onClick={() => {
                setMobileMenu("");
                handleShow();
              }}><span className="nav-link fk-pointer" >Login</span></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">

          <div className="row gx-4 gx-lg-5 h-100 ">
            <div className="col-lg-8 align-self-end">
              <h2 className="text-white font-weight-bold">Retirement services</h2>
            </div>

            <div className="col-8 align-self-baseline">
              <p className="text-white-75 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="btn btn-trans btn-invert">Find Out More</button>
              <button className="btn btn-trans">Get in touch</button>
            </div>
            <div className="col-4 align-self-baseline playbtnbx">
              <i className="playbtn bi bi-caret-right-fill text-white-75"></i>
            </div>
          </div>
        </div>
      </header>

      <Footer />

      <Modal show={show} onHide={handleClose} className={`mymodal mos1 ${open2 ? "largefrm" : "smallfrm"}`}>
        <Modal.Body>
          <div className="row m-0 myrow">
            <div className={`p-4 cnbx ${open2 ? "col-md-6 col-12" : "col-12"}`}>
              <button type="button" className="mybtn-close" aria-label="Close" onClick={handleClose}>
                <i className="bi bi-arrow-left"></i>
              </button>
              <div className="mycardcon">
                <ServiceCard title="Expert advisory" onClick={() => openLoginForm()} />
                <ServiceCard title="Automated advisory" onClick={() => openLoginForm()} />
              </div>
            </div>
            {open2 && (<div className="p-4 col-12 col-md-6">
              <div className="loginform">
                <div>
                  <h3>Welcome back!</h3>
                  <p>Enter your details</p>
                </div>
                <div className="loginform-fm">
                  <input type="text" className="form-control text-center" id="mobile" placeholder="Mobile number" value={mobile} onChange={(v) => setMobile(v.target.value)} maxLength={10} required />
                  <div className="txt-note ">
                    We will send an OTP to the provided phone number
                  </div>
                  <div className="btnbox"><button className="btn mybtn" onClick={() => {
                    if (mobile) {
                      handleClose();
                      handleOtpShow();
                    } else {
                      alert("Mobile required");
                    }
                  }}>Login/register</button></div>
                </div>
              </div>
            </div>)}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={otpFrm} onHide={handleOtpClose} className="mymodal mos2">
        <Modal.Body>
          <div className="row lg-frm myrow m-0">
            <div className="col-12 col-md-6 p-4">
              <button type="button" className="mybtn-close" aria-label="Close" onClick={handleOtpClose}>
                <i className="bi bi-arrow-left"></i>
              </button>
              <div className="login-box">
                <div className="login-bx-1">
                  <div className="margin-top--small">
                    <OtpInput
                      value={otp}
                      onChange={(v) => setOtp(v)}
                      numInputs={4}
                      inputStyle={"inputStyle"}
                    />
                    {timerStr === "" && <div className="resendOtp"><button className="btn" onClick={startTimer}>Resend OTP</button></div>}
                  </div>
                  <div className="btnbox"><button className="btn mybtn">Submit</button></div>
                  <p className="timerHere">{timerStr}</p>
                </div>
                <div className="login-bx-2">
                  <p>The OTP was sent to - {mobile}</p>
                  <p className="resendOtp"><button onClick={changeMobile} className="btn" style={{ marginTop: "0.7rem" }}>Change the phone number</button></p>
                </div>
              </div>
            </div>
            <div className="col-6 nearlogin p-4">
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>

  );
}

export default App;
