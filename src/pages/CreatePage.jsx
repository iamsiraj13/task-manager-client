import React, { Fragment, lazy, Suspense } from "react";

import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
import { getToken } from "../helper/SessionHelper";

const Create = lazy(() => import("../components/Create/Create"));
const CreatePage = () => {

  if(!getToken()){
    window.location.href="/Login"
  }

  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Create />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CreatePage;
