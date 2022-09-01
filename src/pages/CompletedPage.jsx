import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
const Completed =lazy(()=>import("../components/Completed/Completed")) ;

const CompletedPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
          <Completed/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CompletedPage;
