import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";
import CreatePasswordPage from "./pages/AccountRecover/CreatePasswordPage";
import SendOTPPage from "./pages/AccountRecover/SendOTPPage";
import VerifyOTPPage from "./pages/AccountRecover/VerifyOTPPage";
import CanceledPage from "./pages/CanceledPage";
import CompletedPage from "./pages/CompletedPage";
import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import ForgetpassPage from "./pages/ForgetpassPage";
import LoginPage from "./pages/LoginPage";
import NewPage from "./pages/NewPage";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage";
import ProgressPage from "./pages/ProgressPage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/all" element={<NewPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/canceled" element={<CanceledPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" exact element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/forgetpass" element={<ForgetpassPage />} />

            <Route path="/send-OTP" element={<SendOTPPage />} />
            <Route path="/verify-OTP" element={<VerifyOTPPage />} />
            <Route path="create-password" element={<CreatePasswordPage />} />

            <Route path="*" exact element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
};

export default App;
