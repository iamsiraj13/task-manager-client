import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import {
  getToken,
  setEmail,
  setOTP,
  setToken,
  setUserDetails,
} from "../helper/SessionHelper";
import { setProfile } from "../redux/stateSlice/profileSlice";
import { hideLoader, showLoader } from "../redux/stateSlice/settingSlice";
import { setSummery } from "../redux/stateSlice/summerySlice";
import {
  setCanceledTask,
  setCompletedTask,
  setNewTask,
  setProgressTask,
} from "../redux/stateSlice/taskSlice";
import store from "../redux/store/store";

const BASEURL = "https://task-manager-server-omega.vercel.app/api";

const axiosHeader = { headers: { token: getToken() } };

// Registration Request

export const RegistrationRequest = (
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) => {
  store.dispatch(showLoader());

  let url = `${BASEURL}/registration`;
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
      store.dispatch(hideLoader());
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
      store.dispatch(hideLoader());
      ErrorToast("Wrong");
      return false;
    });
};

// login request

export const loginRequest = (email, password) => {
  store.dispatch(showLoader());

  let url = `${BASEURL}/login`;

  const postbody = {
    email: email,
    password: password,
  };

  return axios
    .post(url, postbody)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);
        SuccessToast("Login Success");
        return true;
      }
    })
    .catch((error) => {
      store.dispatch(hideLoader());
      ErrorToast("Something went wrong");
      return false;
    });
};

// new task create request

export const createNewTask = (title, desc) => {
  store.dispatch(showLoader());
  let url = `${BASEURL}/createTasks`;
  let postbody = {
    title: title,
    description: desc,
    status: "New",
  };

  return axios
    .post(url, postbody, axiosHeader)
    .then((res) => {
      if (res.status === 200) {
        SuccessToast("New Task Created");
        return true;
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

// get task by status

export const getTaskByStatus = (Status) => {
  store.dispatch(showLoader());
  let url = `${BASEURL}/taskListByStatus/${Status}`;

  return axios
    .get(url, axiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());

      if (res.status === 200) {
        if (Status == "New") {
          store.dispatch(setNewTask(res.data["data"]));
        } else if (Status == "Completed") {
          store.dispatch(setCompletedTask(res.data["data"]));
        } else if (Status == "Progress") {
          store.dispatch(setProgressTask(res.data["data"]));
        } else if (Status == "Canceled") {
          store.dispatch(setCanceledTask(res.data["data"]));
        }
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

// summery request

export const summeryRequest = () => {
  store.dispatch(showLoader());
  let url = `${BASEURL}/taskCountByStatus`;

  return axios
    .get(url, axiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        store.dispatch(setSummery(res.data["data"]));
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(hideLoader());
      ErrorToast("Something Went Wrong");
      return false;
    });
};

// delete request

export const deleteRequest = (id) => {
  store.dispatch(showLoader());
  let url = `${BASEURL}/deleteTask/${id}`;

  return axios
    .get(url, axiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        SuccessToast("Task Deleted");
        return true;
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

// update task status

export const updateStauts = (id, status) => {
  store.dispatch(showLoader());
  let url = `${BASEURL}/updateTaskStatus/${id}/${status}`;

  return axios
    .get(url, axiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        SuccessToast("Status Updated");
        return true;
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something went Wrong");
      store.dispatch(hideLoader());
      return false;
    });
};

// get user details

export const getUser = () => {
  store.dispatch(showLoader());
  let url = `${BASEURL}/profile`;

  axios
    .get(url, axiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        store.dispatch(setProfile(res.data["data"]));
      } else {
        ErrorToast("Something went wrong");
      }
    })
    .catch((error) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
    });
};

// user profile update

export function profileUpdateRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  store.dispatch(showLoader());

  let URL = BASEURL + "/profileUpdate";

  let PostBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
  let UserDetails = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    photo: photo,
  };

  return axios
    .post(URL, PostBody, axiosHeader)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        SuccessToast("Profile Update Success");
        setUserDetails(UserDetails);

        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(hideLoader());
      return false;
    });
}

// recover verify email request

export const recoverVerifyEmail = (email) => {
  store.dispatch(showLoader());

  let url = `${BASEURL}/recoverVerifyEmail/${email}`;
  return axios
    .get(url)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          ErrorToast("User Not Found");
          return false;
        } else {
          setEmail(email);
          SuccessToast("A 6 digit OTP has been sent to your email address");
          return true;
        }
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};
// recover verify otp request

export const recoverVerifyOTP = (email, OTP) => {
  store.dispatch(showLoader());

  let url = `${BASEURL}/recoverVerifyOTP/${email}/${OTP}`;
  return axios
    .get(url)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          ErrorToast(res.data["data"]);
          return false;
        } else {
          setOTP(OTP);
          SuccessToast("OTP Verify Success");
          return true;
        }
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};
// recover reset password request
export function RecoverResetPassRequest(email, OTP, password) {
  store.dispatch(showLoader());
  let URL = BASEURL + "/RecoverResetPass";
  let PostBody = { email: email, OTP: OTP, password: password };

  return axios
    .post(URL, PostBody)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          ErrorToast(res.data["data"]);
          return false;
        } else {
          SuccessToast("NEW PASSWORD CREATED");
          return true;
        }
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(hideLoader());
      return false;
    });
}
