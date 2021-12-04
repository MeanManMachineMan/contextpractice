import React, { useContext } from 'react';
import { IBook } from '../constants/interfaces';
import { BookContext } from '../store/BookContext';

export const BookDetail = ( book : IBook) => {
    
    const { books, dispatch } = useContext(BookContext)

    return(
        <li onClick={() => dispatch(
        {
            type: "REMOVE_BOOK",
            payload: book
        }
        )} className="hover:line-through cursor-pointer p-3">
            { book.author } wrote { book.title}
        </li>
    )
}