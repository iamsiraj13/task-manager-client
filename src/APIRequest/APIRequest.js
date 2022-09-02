import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";

const BASEURL = "http://localhost:5000/api";
export const RegistrationRequest = (
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) => {
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
          if(res.status === 200){
            if(res.data['status'] == 'fail'){
              if(res.data['data']['keyPattern']['email']===1){
                ErrorToast("Email Already Exist")
                return false;
            }
            else{
              ErrorToast("Something Went Wrong")
                return false;
            }
            }else{
              SuccessToast("Registration Success");
              return true;
            }
          }else{
            ErrorToast("Something Went Wrong")
          }
    })
    .catch((error) => {
      ErrorToast("Something Went Wrong")
      return false;
    });
};
