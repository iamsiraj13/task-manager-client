import React, { Fragment, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
const ProfilePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
          <h1>master layout</h1>
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProfilePage;
