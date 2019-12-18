// App.js

// Reference Site: https://learnwithparam.com/blog/learn-react-hooks-by-building-books-search/

import React, {useState} from 'react';
import './App.css';

import axios from 'axios';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);



  }

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Google Book Search</span>
          <input 
            type="search" 
            placeholder="Book Title" 
            value={searchTerm}
            onChange = {onInputChange}
          />
          <button type="submit">SEARCH</button>
        </label>
      </form>
    </section>
  )

}

export default App;