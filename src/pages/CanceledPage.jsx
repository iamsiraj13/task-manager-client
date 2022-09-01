import React, { Fragment, lazy, Suspense } from "react";

import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";

const Canceled = lazy(() => import("../components/Canceled/Canceled"));
const CanceledPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Canceled />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CanceledPage;


