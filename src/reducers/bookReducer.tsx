import React from "react";
import { IAction, IBook } from "../constants/interfaces";

export const BookReducer = (state : IBook[], action : IAction) => {
    console.log("Going to the reducer", action.payload)
    switch(action.type) {
        case "ADD_BOOK": 
            return [...state, {
                title: action.payload.title,
                author: action.payload.author,
                id: action.payload.id
            }]
        case "REMOVE_BOOK":
            return state.filter(book => book.id !== action.payload.id)
        default:
            return state;
    }
}