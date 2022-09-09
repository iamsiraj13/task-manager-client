import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../../APIRequest/APIRequest";
import {
  ErrorToast,
  isEmail,
  isEmpty,
  isMobile,
} from "../../helper/FormHelper";

const Registration = () => {
  const navigate = useNavigate();
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo =
      "data:image/png;base64,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";

    if (isEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (isEmpty(firstName)) {
      ErrorToast("First Name Required !");
    } else if (isEmpty(lastName)) {
      ErrorToast("Last Name Required !");
    } else if (!isMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !");
    } else if (isEmpty(password)) {
      ErrorToast("Password Required !");
    } else {
      RegistrationRequest(
        email,
        firstName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result == true) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-md-4 p-2">
                    <label>Email Address</label>
                    <input
                      ref={(input) => (emailRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>First Name</label>
                    <input
                      ref={(input) => (firstNameRef = input)}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Last Name</label>
                    <input
                      ref={(input) => (lastNameRef = input)}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Mobile Number</label>
                    <input
                      ref={(input) => (mobileRef = input)}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Password</label>
                    <input
                      ref={(input) => (passwordRef = input)}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                </div>
                <div className="row mt-2 p-0">
                  <div className="col-md-4 p-2">
                    <button
                      onClick={onRegistration}
                      className="btn mt-3 w-100 float-end btn-primary animated fadeInUp"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
