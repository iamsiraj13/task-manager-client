import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { setToken, setUserDetails } from "../helper/SessionHelper";
import { hideLoader, showLoader } from "../redux/stateSlice/settingSlice";
import store from "../redux/store/store";

const BASEURL = "http://localhost:5000/api";
export const RegistrationRequest = (
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) => {

  store.dispatch(showLoader())

  let url = `${BASEURL}/Registration`;
  const postBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };

  return axios
    .post(url, postBody)
    .then((res) => {
      store.dispatch(hideLoader())
      if (res.status === 200) {
        if (res.data["status"] == "fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorToast("Email Already Exist");
            return false;
          } else {
            ErrorToast("Something Went Wrong");
            return false;
          }
        } else {
          SuccessToast("Registration Success");
          return true;
        }
      } else {
        ErrorToast("Something Went Wrong");
      }
    })
    .catch((error) => {
      store.dispatch(hideLoader())
      ErrorToast("Something Went Wrong");
      return false;
    });
};


// login request 

export const loginRequest=(email,password)=>{

  store.dispatch(showLoader())

    let url = `${BASEURL}/login`

    const postbody ={
      email:email,
      password:password
    }

    return axios.post(url,postbody).then((res)=>{
      store.dispatch(hideLoader())
      if( res.status === 200 ){
         setToken(res.data['token'])
         setUserDetails(res.data['data'])
         SuccessToast("Login Success")
         return true
      }

    }).catch((error)=>{
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    })



}