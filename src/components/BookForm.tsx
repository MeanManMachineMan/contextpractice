import React, { useContext, useState } from "react";
import { BookContext } from "../store/BookContext";

export const BookForm = () => {
    const { books, dispatch } = useContext(BookContext)
    const [ title, setTitle ] = useState("")
    const [ author, setAuthor ] = useState("")

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Enter the book title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" />
            <label htmlFor="author">Enter the book's author: </label>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} name="author" />
            <button onClick={() => dispatch(
                {
                    type: "ADD_BOOK",
                    payload: {
                        title, 
                        author, 
                        id: new Date().getUTCMilliseconds()
                    }
                }
                )
                }
            >Add book!</button>
        </form>
    )
}