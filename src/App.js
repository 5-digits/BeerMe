import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Containers
import Search from './Containers/Search';
import Results from './Containers/Results';

// Components
import Header from './Components/Header';

//Styles
import './css/common.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="main-container">
          <Header />
          <Route exact path="/" component= { Search } />
          <Route path="/results" component= { Results } />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
