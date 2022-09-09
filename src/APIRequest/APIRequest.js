import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { hideLoader, showLoader } from "../redux/stateSlice/settingSlice";
import { setSummery } from "../redux/stateSlice/summerySlice";
import {
  setCanceledTask,
  setCompletedTask,
  setNewTask,
  setProgressTask,
} from "../redux/stateSlice/taskSlice";
import store from "../redux/store/store";

const BASEURL = "http://localhost:5000/api";

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
      ErrorToast("Something Went Wrong");
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
