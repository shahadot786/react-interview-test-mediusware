import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import GetContacts from "../API/GetContacts";

export default function CustomModal({ country }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    navigate("/problem-2");
  };
  const [isChecked, setIsChecked] = useState(false); //even check

  const onCheckClicked = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacts Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <NavLink
                  to="/modal-a"
                  className={({ isActive }) =>
                    `nav-link + ${isActive ? " active" : ""}`
                  }
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "white" : "black",
                      backgroundColor: isActive ? "#46139f" : "#fff",
                      margin: 5,
                      border: "1px solid #46139f",
                    };
                  }}
                >
                  All Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/modal-b"
                  className={({ isActive }) =>
                    `nav-link + ${isActive ? " active" : ""}`
                  }
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "black",
                      backgroundColor: isActive ? "#ff7f50" : "#dddddd",
                      margin: 5,
                    };
                  }}
                >
                  US Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          {/* get contacts */}
          <GetContacts even={isChecked} country={country} />
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Check
              label="Only Even"
              value="check"
              checked={isChecked}
              onChange={onCheckClicked}
            />
          </Form>
          <Button
            style={{
              border: "1px solid #46139f",
              backgroundColor: "white",
              color: "black",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
