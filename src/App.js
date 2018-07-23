import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Containers
import Search from './Containers/Search';
import Results from './Containers/Results';

// Components
import Header from './Components/Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isAppInitiated : false,
        searchQuery: {
          beerStyleID : "",
          srmColorID : ""
        }
    }
  }

  componentDidMount() {
    this.initiateAppStateAt(5000);
  }

  initiateAppStateAt = (delay) => {
    // Initiate app state when initial component has finished loading to turn off loading animation
    setTimeout( () => {
      this.setState( {
        ...this.state,
        isAppInitiated : true
      });
    } , delay);
  }

  updateSearchQuery = ( newQuery ) => {
    this.setState( {
      ...this.state,
      searchQuery : newQuery
    });
  }

  render() {
    const isAppInitiated = this.state.isAppInitiated;

    return (
      <BrowserRouter >
        <div className={ !isAppInitiated ? "main-container fill-beer" : "main-container" }>
          { !isAppInitiated ? <div id="liquid"></div> : ''  }

          <Header />

          <Route exact path="/"
            render= { (props) =>
               <Search { ...props }
                 state={ this.state }
                 updateSearchQuery={ this.updateSearchQuery } />
             }
          />

          <Route path="/beer/:id"
            render= { (props) =>
              <Results { ...props } appInitiator= { this.initiateAppStateAt } />
            }
          />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
