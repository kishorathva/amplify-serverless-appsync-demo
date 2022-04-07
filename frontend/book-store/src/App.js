import React, { useState } from "react";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { getBookById } from "./graphql/queries/book";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [book, setBook] = useState(null);
  const getBook = async () => {
    // make a call to appsync api
    // BookId
    // 1de9d81b-7b60-439b-ac7d-0abd47f8d898
    const book = await API.graphql(
      graphqlOperation(getBookById, {
        id: "1de9d81b-7b60-439b-ac7d-0abd47f8d898",
      })
    );
    setBook(book.data.getBookById);
  };

  const viewBook = () => {
    if (book) {
      return (
        <article>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.author}</p>
          {/* <p>book.price</p> */}
        </article>
      );
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <section>
            <button onClick={() => getBook()}>Get book details</button>

            <hr />
            {viewBook()}
          </section>
          <p>Hey {user.username}, welcome to my channel, with auth!</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
