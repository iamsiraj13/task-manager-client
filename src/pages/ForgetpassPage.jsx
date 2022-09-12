import React, { Fragment, lazy, Suspense } from "react";
import SendOTP from "../components/AccountRecover/SendOTP";

const ForgetpassPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <SendOTP />
      </MasterLayout>
    </Fragment>
  );
};

export default ForgetpassPage;
