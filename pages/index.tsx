import { ApolloClient, ApolloProvider, createHttpLink, gql, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import type { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import { BookForm } from '../src/components/BookForm'
import { BookList } from '../src/components/BookList'
import { Navbar } from '../src/components/Navbar'
import BookContextProvider from '../src/store/BookContext'

const Home: NextPage = () => {

  const httpLink = createHttpLink({
    uri : "http://localhost:8080/graphql",
  })

  const authLink = setContext((_, { headers }) => {
    const token = "Bearer eyqjksoidoiahjknasl"
    const member_id = "has_logged_in"
    return {
      headers: {
        ...headers,
        Authorization: token,
        member_id: member_id
      }
    }
  })

  const client = new ApolloClient({
    link : authLink.concat(httpLink),
    cache : new InMemoryCache()
  })

  return (
    <>
    <ApolloProvider client={client}>
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </ApolloProvider>
    </>
  )
}

export default Home