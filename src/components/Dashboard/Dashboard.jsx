import React, { Fragment } from 'react';

const Dashboard = () => {
    return (
        <Fragment>
        <div className="container">
            <div className="row">
                {
                    [1,2,3,4].map((item,i)=>
                        <div  className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="animated fadeInUp">Total</h5>
                                    <h6 className="text-secondary animated fadeInUp">45</h6>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
</Fragment>
    );
};

export default Dashboard;