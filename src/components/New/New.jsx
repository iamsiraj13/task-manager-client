import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineDelete } from "react-icons/all";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect } from "react";
import { getTaskByStatus } from "../../APIRequest/APIRequest";
import { useSelector } from "react-redux";
import { DeleteTodo } from "../../helper/DeleteAlert";
import { UpdateTodo } from "../../helper/UpdateAlert";

const New = () => {
  const newTasks = useSelector((state) => state.task.New);

  useEffect(() => {
    getTaskByStatus("New");
  }, []);

  const DeleteItem = (id) => {
    DeleteTodo(id).then((result) => {
      if (result === true) {
        getTaskByStatus("New");
      }
    });
  };

  const updateStatus = (id, status) => {
    UpdateTodo(id, status).then((res) => {
      if (res === true) {
        getTaskByStatus("New");
      }
    });
  };

  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>Task New</h5>
          </div>
          <div className="col-12 float-end col-md-6 col-lg-4 px-2">
            <div className="row">
              <div className="col-8">
                <input className="form-control w-100" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-0 m-0">
          {newTasks.length > 0 ? (
            newTasks.map((item, i) => (
              <div
                key={i.toString()}
                className="col-12 col-lg-4 col-sm-6 col-md-4  p-2"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp">{item.title}</h6>
                    <p className="animated fadeInUp">{item.description}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      <AiOutlineCalendar /> {item.createdDate}
                      <a
                        onClick={updateStatus.bind(this, item._id, item.status)}
                        className="icon-nav text-primary mx-1"
                      >
                        <AiOutlineEdit />
                      </a>
                      <a
                        onClick={DeleteItem.bind(this, item._id)}
                        className="icon-nav text-danger mx-1"
                      >
                        <AiOutlineDelete />
                      </a>
                      <a className="badge float-end bg-info">{item.status}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <h2>Empty</h2>
            </div>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default New;
