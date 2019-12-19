// App.js

// Reference Site: https://learnwithparam.com/blog/learn-react-hooks-by-building-books-search/

import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

import axios from 'axios';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  }
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <section className="gooboosection">
      <form className="gooboosearch" onSubmit={onSubmitHandler}>
        <label>
          <span>Google Book Search</span><br/>
          <input 
            type="search" 
            placeholder="Book Title" 
            value={searchTerm}
            onChange = {onInputChange}
          />
          <button type="submit">SEARCH</button>
        </label>
      </form>
      <div>
        {
          books.items.map((book,index) => {
            return (
              <div key={index}>
                <div>
                  <img alt={`{${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div> 
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  )

}

export default App;

//ReactDOM.render(<App />, rootElement);