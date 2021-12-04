import type { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import { BookForm } from '../src/components/BookForm'
import { BookList } from '../src/components/BookList'
import { Navbar } from '../src/components/Navbar'
import BookContextProvider from '../src/store/BookContext'

const Home: NextPage = () => {
  return (
    <>
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </>
  )
}

export default Home