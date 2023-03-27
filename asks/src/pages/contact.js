import React from "react";
import Nav from "../components/nav";
// import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-6 contact-left">
            <h1>
              <span className="font-bold">That idea you have,</span>
              <br></br>Let’s start working on it
            </h1>
          </div>
          <div className="col-md-6 contact-right">
            <p>Say hello</p>
            {/* 
            <form className="demoForm">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </form> */}
            <form action="" className="container">
              <div className="row pt-5">
                <div class="input-field col-md-6">
                  <input type="text" id="name" required />
                  <label for="name">Your name</label>
                </div>
                <div class="input-field col-md-6">
                  <input type="text" id="email" required />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row pt-5">
                <div class="input-field col-12">
                  <input type="text" id="subject" required />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div className="row pt-5">
                <div class="input-field col-12">
                  <input type="text" id="message" required />
                  <label for="message">Message</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
