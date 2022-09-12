import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, profileUpdateRequest } from "../../APIRequest/APIRequest";
import {
  ErrorToast,
  getBase64,
  isEmail,
  isEmpty,
  isMobile,
} from "../../helper/FormHelper";

const Profile = () => {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef,
    userImgRef,
    userImgView = useRef();

  useEffect(() => {
    getUser();
  }, []);

  const ProfileData = useSelector((state) => state.profile.value);

  let navigate = useNavigate();

  const PreviewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      userImgView.src = base64Img;
    });
  };

  const UpdateMyProfile = () => {
    let email = emailRef.value;
    let fastName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo = userImgView.src;

    if (isEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (isEmpty(fastName)) {
      ErrorToast("First Name Required !");
    } else if (isEmpty(lastName)) {
      ErrorToast("Last Name Required !");
    } else if (!isMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !");
    } else if (isEmpty(password)) {
      ErrorToast("Password Required !");
    } else {
      profileUpdateRequest(
        email,
        fastName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result === true) {
          navigate("/");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <img
                  ref={(input) => (userImgView = input)}
                  className="icon-nav-img-lg"
                  src={ProfileData["photo"]}
                  alt=""
                />
                <hr />
                <div className="row">
                  <div className="col-4 p-2">
                    <label>Profile Picture</label>
                    <input
                      onChange={PreviewImage}
                      ref={(input) => (userImgRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="file"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Email Address</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["email"]}
                      readOnly={true}
                      ref={(input) => (emailRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>First Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["firstName"]}
                      ref={(input) => (firstNameRef = input)}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Last Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["lastName"]}
                      ref={(input) => (lastNameRef = input)}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Mobile</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["mobile"]}
                      ref={(input) => (mobileRef = input)}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Password</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["password"]}
                      ref={(input) => (passwordRef = input)}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <button
                      onClick={UpdateMyProfile}
                      className="btn w-100 float-end btn-primary animated fadeInUp"
                    >
                      Update
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

export default Profile;
