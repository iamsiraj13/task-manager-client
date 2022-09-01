import React, { Fragment, lazy, Suspense } from "react";

import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";

const Create = lazy(() => import("../components/Create/Create"));
const CreatePage = () => {
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
