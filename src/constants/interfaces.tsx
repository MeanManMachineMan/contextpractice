export interface IBook{
    title: string,
    author: string,
    id: number,
}

export type TBookList = {
    books : IBook[],
    addBook : (title : string, author: string, id: number) => void,
    removeBook : (id: number) => void
}

export type IAction = {
    type : string,
    payload: IBook
}