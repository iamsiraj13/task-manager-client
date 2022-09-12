import React, { Fragment } from "react";
import { useRef } from "react";
import { ErrorToast, isEmpty } from "../../helper/FormHelper";

const CreatePassword = () => {
  let PasswordRef,
    ConfirmPasswordRef = useRef();

  const ResetPass = () => {
    let password = PasswordRef.value;
    let confirmPassword = ConfirmPasswordRef.value;

    if (isEmpty(password)) {
      ErrorToast("Password is Requires");
    } else if (isEmpty(confirmPassword)) {
      ErrorToast("Confirm Password is Requires");
    } else if (password !== confirmPassword) {
      ErrorToast("Password doesn't match");
    } else {
      alert("its working");
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>SET NEW PASSWORD</h4>
                <br />
                <label>Your email address</label>
                <input
                  readOnly={true}
                  // value={getEmail()}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <label>New Password</label>
                <input
                  ref={(input) => (PasswordRef = input)}
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <label>Confirm Password</label>
                <input
                  ref={(input) => (ConfirmPasswordRef = input)}
                  placeholder="Confirm Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={ResetPass}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePassword;
