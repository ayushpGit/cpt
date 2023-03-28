import React from "react";
import Nav from "../components/nav";
// import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row contact-spacing">
          <div className="col-md-6 contact-left">
            <h1>
              <span className="font-bold">That idea you have,</span>
              <br></br>Let’s start working on it
            </h1>
          </div>
          <div className="col-md-6 contact-right">
            <h1>Say hello</h1>

            {/* <form className="demoForm">
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
              <div className="row">
                <div class="input-field col-md-6">
                  <input type="text" id="name" required />
                  <label className="form-label" for="name">
                    Your name
                  </label>
                </div>
                <div class="input-field col-md-6">
                  <input type="text" id="email" required />
                  <label className="form-label" for="email">
                    Email
                  </label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col-12">
                  <input type="text" id="subject" required />
                  <label className="form-label" for="subject">
                    Subject
                  </label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col-12">
                  <textarea type="text" id="message" rows="1" required />
                  <label className="form-label" for="message">
                    Message
                  </label>
                </div>
              </div>
              <button type="submit" class="btn-cpt link-button pt-5 mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
