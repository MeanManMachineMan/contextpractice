import React, { useContext } from "react";
import { IBook } from "../constants/interfaces";
import { BookContext } from "../store/BookContext";
import { BookDetail } from "./BookDetail";

export const BookList = () => {
    const { books, dispatch } = useContext(BookContext)

    return books.length ? (
        <div>
            { books.map( (bookie : IBook) => {
                return (
                    <>
                    <BookDetail {...bookie} key={bookie.id}/>
                    </>
                )
            })}
        </div>
    ) : 
    (
        <p>No books to read, enjoy!</p>
    )
}