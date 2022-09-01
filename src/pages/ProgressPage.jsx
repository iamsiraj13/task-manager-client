import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';
import MasterLayout from '../components/masterLayout/MasterLayout';

const Progress =lazy(()=>import('../components/Progress/Progress')) ;

const ProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                 <Suspense fallback={<LazyLoader/>}>
                    <Progress/>
                 </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProgressPage;