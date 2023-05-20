import React, { useEffect, useRef } from "react";
import ContactBtn from "./ContactBtn";
import NotFound from "./NotFound";

const RenderContent = ({
  even,
  contacts,
  setShow,
  setIsSelectedContact,
  setCurrentPage,
  title,
}) => {
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;
      const isAtEnd = scrollTop + clientHeight === scrollHeight;
      if (isAtEnd) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    divRef.current.addEventListener("scroll", handleScroll);
  }, []);

  // console.log("---------------contacts", contacts);

  return (
    <div
      ref={divRef}
      style={{ height: "285px", overflow: "auto", paddingBottom: "100px" }}
    >
      {!contacts.length <= 0 ? (
        <>
          {even
            ? contacts
                .filter((item) => item.id % 2 === 0)
                .map((item, index) => (
                  <ContactBtn
                    item={item}
                    key={index}
                    setShow={() => setShow(true)}
                    setIsSelectedContact={() => setIsSelectedContact(item)}
                  />
                ))
            : contacts.map((item, index) => {
                return (
                  <ContactBtn
                    item={item}
                    key={index}
                    setShow={() => setShow(true)}
                    setIsSelectedContact={() => setIsSelectedContact(item)}
                  />
                );
              })}
          {/* {!contacts.length <= 0 && (
        <div className="d-flex justify-content-center mt-2 mb-2">
          <button className="btn btn-secondary" onClick={onLoadMoreHandler}>
            load more
          </button>
        </div>
      )} */}
        </>
      ) : (
        <>
          <NotFound title={title || "No Contact Found"} />
        </>
      )}
    </div>
  );
};

export default RenderContent;
