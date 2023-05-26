import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";
import DetailsModal from "../Modal/DetailsModal";
import Loader from "../Utils/Loader";
import RenderContent from "../Utils/RenderContent";
import Search from "../Utils/Search";

export default function GetAllContacts({ even, country }) {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectedContact, setIsSelectedContact] = useState(null);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const token =
    "PyrYUtlOPhsCJET444sddcaLPviZFwMQPm29GZfxBiam9FHgMVhLvQhr5pnAJepO";

  const pageSize = 20;
  const baseUrl = "https://contact.mediusware.com/api/";

  const queryUrl = `${baseUrl}${
    country
      ? "country-contacts/" +
        country +
        "/?search=" +
        searchQuery +
        "&page=" +
        currentPage +
        "&page_size=" +
        pageSize
      : "contacts" +
        "/?search=" +
        searchQuery +
        "&page=" +
        currentPage +
        "&page_size=" +
        pageSize
  }`;

  //api headers
  const headers = {
    headers: {
      Authorization: `Bearer: ${token}`,
      "Content-Type": "application/json",
    },
  };

  //load the first data
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(queryUrl, headers);
        setContacts((prevContacts) => [
          ...prevContacts,
          ...response?.data?.results,
        ]);
        // setContacts(response?.data?.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error?.response?.data?.detail);
        console.log(error);
      }
    };
    fetchContacts();
    //cleanup
    return () => {
      setContacts([]);
      setIsLoading(false);
      setError("");
    };
  }, [searchQuery, currentPage]);

  //search
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  //hit enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(event.target.value);
    }
  };

  return (
    <>
      <Search
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        handleKeyDown={handleKeyDown}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <RenderContent
          even={even}
          contacts={contacts}
          setCurrentPage={setCurrentPage}
          setShow={setShow}
          setIsSelectedContact={setIsSelectedContact}
          title={error}
        />
      )}
      {/* details contacts modal */}
      {isSelectedContact && (
        <DetailsModal
          contact={isSelectedContact}
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
}
