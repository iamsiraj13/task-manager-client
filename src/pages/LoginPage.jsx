import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";

const Login = lazy(() => import("../components/Login/Login"));

const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
