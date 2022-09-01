import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullScreenLoader from './components/masterLayout/FullScreenLoader';
import CanceledPage from './pages/CanceledPage';
import CompletedPage from './pages/CompletedPage';
import CreatePage from './pages/CreatePage';
import DashboardPage from './pages/DashboardPage';
import ForgetpassPage from './pages/ForgetpassPage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import Page404 from './pages/Page404';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <Fragment>
       <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<DashboardPage/>} />
            <Route exact path="/Create" element={<CreatePage/>} />
            <Route exact path="/All" element={<NewPage/>} />
            <Route exact path="/Progress" element={<ProgressPage/>} />
            <Route exact path="/Completed" element={<CompletedPage/>} />
            <Route exact path="/Canceled" element={<CanceledPage/>} />
            <Route exact path="/Profile" element={<ProfilePage/>} />
            <Route exact path="/Login" element={<LoginPage/>} />
            <Route exact path="/Registration" element={<RegistrationPage/>} />
            <Route exact path="/Forgetpass" element={<ForgetpassPage/>} />
            <Route exact path="*" element={<Page404/>} />
        </Routes>
       </BrowserRouter>
       <FullScreenLoader/>
    </Fragment>
  );
};

export default App;