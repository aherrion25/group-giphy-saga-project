import React from 'react';
import Search from '../Search/Search';
import {HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div>
      <h1>Giphy Search!</h1>
        <Route exact path="/" >
          <Search />
        </Route>
    </div>
  </Router>
  );
}

export default App;
