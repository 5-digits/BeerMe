import React, { Component } from 'react'
import { Route, HashRouter, Link } from 'react-router-dom'
import Loadable from 'react-loadable'

// Components
import Header from './Components/Header'
import Loader from './Components/Loader'

//Containers
const Loading = ( props ) => {
  return props.pastDelay ? <Loader /> : null
}

const Search = Loadable({
  loader: () => import('./Containers/Search'),
  loading: Loading,
  delay: 0
});

const Results = Loadable({
  loader: () => import('./Containers/Results'),
  loading: Loading,
  delay: 0
});

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

    // bind functions
    this.initiateAppStateAt = this.initiateAppStateAt.bind(this)
    this.updateSearchQuery = this.updateSearchQuery.bind(this)
    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.resetSearchQuery = this.resetSearchQuery.bind(this)
    this.searchFromBreweryDB = this.searchFromBreweryDB.bind(this)

  }

  componentDidMount() {
    // Allow initial animation to finish
    this.initiateAppStateAt(5000)
  }

  /*
   * -- DOWNSTREAM --
   */
  initiateAppStateAt(delay) {
    // Initiate app state when initial component has finished loading to turn off loading animation
    setTimeout( () => {
      this.setState( {
        ...this.state,
        isAppInitiated : true
      });
    } , delay);
  }

  /*
   * -- DOWNSTREAM --
   */
  updateSearchQuery(newQuery) {
    this.setState( {
      ...this.state,
      searchQuery : newQuery
    });
  }

  /*
   * -- DOWNSTREAM --
   */
  updateSearchResults(newResults) {
    this.setState( {
      ...this.state,
      searchResults : newResults
    });
  }

  /*
   * -- DOWNSTREAM --
   */
  resetSearchQuery() {
    const reset = {
      beerStyleID : "",
      srmColorID : "20"
    }
    this.updateSearchQuery( reset );
  }

  /*
   * -- DOWNSTREAM --
   * Main method that makes request to server
   * TODO Add to API Component
   */
  searchFromBreweryDB(params) {
    // TODO move api key to env variable
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
        // TODO on Error send to error page
          // Error page should include Beer recommendations - Check if Brewery offers option of more than one random beer
      });
  }

  render() {
    return (
      <HashRouter basename={ process.env.PUBLIC_URL }>
        <div className= "main-container">
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
