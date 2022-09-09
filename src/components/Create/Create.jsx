import React from "react";
import { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createNewTask } from "../../APIRequest/APIRequest";
import { ErrorToast, isEmpty } from "../../helper/FormHelper";

const Create = () => {

  let titleRef, descriptionRef = useRef();
  const navigate = useNavigate();

  const CreateNew=()=>{ 
    let title = titleRef.value;
    let desc = descriptionRef.value;

    if( isEmpty(title)){
      ErrorToast("Title Required")
    }else if( isEmpty(desc)){
      ErrorToast("Description Required")

    }else{
      createNewTask(title,desc).then((result)=>{
        if( result == true){
          navigate("/all")
        }
      })
    }

  }

  return (
    <Container fluid={true} className="content-body">
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
          <div className="card">
            <div className="card-body">
              <h4>Create New</h4>
              <br />
              <input
                ref={(input) => (titleRef = input)}
                placeholder="Task Name"
                className="form-control animated fadeInUp"
                type="text"
              />
              <br />
              <textarea
                ref={(input) => (descriptionRef = input)}
                rows={5}
                placeholder="Task Description"
                className="form-control animated fadeInUp"
                type="text"
              />
              <br />
              <button 
              onClick={CreateNew}
               className="btn float-end btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Create;
