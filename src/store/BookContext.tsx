import React, { createContext, useReducer } from "react";
import { IBook } from "../constants/interfaces";
import { BookReducer } from "../reducers/bookReducer";

const initializer : IBook[] =[
    {title : "Lord Of The Rings: Fellowship Of The Rings", author: 'JRR Tolkien', id : 1},
    {title : "Lord Of The Rings: Two Towers", author: 'JRR Tolkien', id : 2},
    {title : "Lord Of The Rings: Return Of The King", author: 'JRR Tolkien',  id : 3}
]

export const BookContext = createContext<IBook[]>(initializer)

export const BookContextProvider : React.FunctionComponent = ({ children }) => {

    const [ books, dispatch ] = useReducer(BookReducer, initializer)

    return(
        <BookContext.Provider value = {{ books, dispatch }}>
            { children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;