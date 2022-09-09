import React, { Fragment } from "react";
const Page404 = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <h2>404 - Not Found</h2>
          <br />
          <button className="btn btn-primary" onClick={()=>window.location.href="/login"}>Back to HomePage</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Page404;
