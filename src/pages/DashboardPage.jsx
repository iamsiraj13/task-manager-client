import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
 

const Dashboard =lazy(()=>import("../components/Dashboard/Dashboard")) ;

const DashboardPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Dashboard/>
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default DashboardPage;
