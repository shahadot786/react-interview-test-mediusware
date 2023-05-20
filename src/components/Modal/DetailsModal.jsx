import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DetailsModal({ contact, show, setShow }) {
  const handleClose = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-12">
          <span>Phone:</span>
          <p>{contact?.phone}</p>
          <span>Country:</span>
          <p>{contact?.country?.name}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
