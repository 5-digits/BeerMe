import React, { Component } from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';

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
        },
        searchResults: {}
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

  updateSearchResults = ( newResults ) => {
    this.setState( {
      ...this.state,
      searchResults : newResults
    });
  }

  resetSearchQuery = () => {
    const reset = {
      beerStyleID : "",
      srmColorID : "20"
    }

    this.updateSearchQuery( reset );
  }

  searchFromBreweryDB = (params) => {
    const apiKey = "2ac80c8189c3741bc212ff55d424eee0";
    const CORSBridge = "https://cors-anywhere.herokuapp.com";
    const breweryDB = "http://api.brewerydb.com/v2";

    return fetch( `${CORSBridge}/${breweryDB}/${params}&key=${apiKey}`)
      .then( blob => blob.json() )
      .then( resp => {
        this.updateSearchResults( resp.data );
      })
      .catch( error => {
        console.error(error);
      });
  }

  render() {
    const isAppInitiated = this.state.isAppInitiated;
    let pourAnimation = !isAppInitiated ? <div id="liquid"></div> : '';
    return (
      <HashRouter basename={process.env.PUBLIC_URL }>
        <div className={ !isAppInitiated ? "main-container fill-beer" : "main-container" }>
          { pourAnimation }

          <Link to="/">
            <Header />
          </Link>

          <Route exact path="/"
            render= { (props) =>
               <Search { ...props }
                 state={ this.state }
                 updateSearchQuery={ this.updateSearchQuery }
                 updateSearchResults={ this.updateSearchResults }
                 resetSearchQuery={ this.resetSearchQuery }
                 searchFromBreweryDB= { this.searchFromBreweryDB }
                 />
             }
          />

        <Route path="/beer/:id"
            render= { (props) =>
              <Results { ...props }
                state= { this.state }
                appInitiator= { this.initiateAppStateAt }
                searchFromBreweryDB= { this.searchFromBreweryDB }
                />
            }
          />
        </div>
      </HashRouter>

    );
  }
}

export default App;
