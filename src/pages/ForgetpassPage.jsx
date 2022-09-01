import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";

const ForgetPassword =lazy(()=>import("../components/Forgetpass/ForgetPassword"));


const ForgetpassPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ForgetPassword/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ForgetpassPage;
