import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";

const New = lazy(() => import("../components/New/New"));

const NewPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <New />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default NewPage;
