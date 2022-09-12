import React, { Fragment, useEffect, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineCancelPresentation, RiDashboardLine } from "react-icons/all";
import { BsHourglass, BsListNested } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { getUserDetails, removeSession } from "../../helper/SessionHelper";

const MasterLayout = (props) => {
  let sideNavRef,
    contentRef = useRef();

  const profile = getUserDetails();

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
  };

  const onLogout = () => {
    removeSession();
  };

  return (
    <Fragment>
      <Navbar className="fixed-top shadow-sm px-0">
        <Container fluid={true}>
          <Navbar.Brand>
            <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}>
              <AiOutlineMenuUnfold />
            </a>
            <img className="nav-logo mx-2" src={logo} alt="logo" />
          </Navbar.Brand>
          <div className="float-right h-auto d-flex">
            <div className="user-dropdown">
              <img
                className="icon-nav-img icon-nav"
                src={profile.photo}
                alt=""
              />
              <div className="user-dropdown-content ">
                <div className="mt-4 text-center">
                  <img
                    className="icon-nav-img icon-nav"
                    src={profile.photo}
                    alt=""
                  />
                  <h6>{profile.firstName}</h6>
                  <hr className="user-dropdown-divider  p-0" />
                </div>
                <NavLink to="/profile" className="side-bar-item">
                  <AiOutlineUser className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Profile</span>
                </NavLink>
                <a
                  className="side-bar-item"
                  onClick={() => {
                    onLogout();
                  }}
                >
                  <AiOutlineLogout className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
      {/* sidenav */}
      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className="side-nav-open"
      >
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/"
        >
          <RiDashboardLine className="side-bar-item-icon" />
          <span className="side-bar-item-caption">Dashboard</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Create"
        >
          <AiOutlineEdit className="side-bar-item-icon" />
          <span className="side-bar-item-caption">Create New</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/All"
        >
          <BsListNested className="side-bar-item-icon" />
          <span className="side-bar-item-caption">New Task</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Progress"
        >
          <BsHourglass className="side-bar-item-icon" />
          <span className="side-bar-item-caption">In Progress</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Completed"
        >
          <AiOutlineCheckCircle className="side-bar-item-icon" />
          <span className="side-bar-item-caption">Completed</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Canceled"
        >
          <MdOutlineCancelPresentation className="side-bar-item-icon" />
          <span className="side-bar-item-caption">Canceled</span>
        </NavLink>
      </div>

      <div ref={(div) => (contentRef = div)} className="content">
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
