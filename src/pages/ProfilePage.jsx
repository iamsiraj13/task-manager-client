import React, { Fragment, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
import Profile from "../components/Profile/Profile";
const ProfilePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProfilePage;
