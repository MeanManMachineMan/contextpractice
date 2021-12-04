import React, { useContext } from "react";
import BookContextProvider, { BookContext } from "../store/BookContext";

export const Navbar = () => {
    const { books, removeBook } = useContext(BookContext)

    return(
        <>
        <p className="p-3">You currently have { books.length } books left to read!</p>
        </>
    )
}