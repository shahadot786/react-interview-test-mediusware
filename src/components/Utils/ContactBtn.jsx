import React from "react";

export default function ContactBtn({ item, setIsSelectedContact, setShow }) {
  return (
    <button
      onClick={() => {
        setIsSelectedContact(item);
        setShow(true);
      }}
      type="button"
      className="btn btn-dark position-relative contactList"
    >
      {item?.phone}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success font_size">
        {item.id}
        <span className="visually-hidden"></span>
      </span>
    </button>
  );
}
