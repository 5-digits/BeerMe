import React, { Component } from 'react'
import { Route, HashRouter, Link } from 'react-router-dom'
import Loadable from 'react-loadable'

// Components
import Header from './Components/Header'
import Loader from './Components/Loader'

//Containers
const GenericLoading = ( props ) => {
  return props.pastDelay ? <Loader loadingText="Loading..." /> : null
}

const Search = Loadable({
  loader: () => import('./Containers/Search'),
  loading: GenericLoading,
  delay: 0
});

const Results = Loadable({
  loader: () => import('./Containers/Results'),
  loading: GenericLoading,
  delay: 0
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        searchQuery: {
          beerStyleID : "",
          srmColorID : ""
        },
        searchResults: {}
    }

    // bind functions
    this.updateSearchQuery = this.updateSearchQuery.bind(this)
    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.resetSearchQuery = this.resetSearchQuery.bind(this)
    this.searchFromBreweryDB = this.searchFromBreweryDB.bind(this)
    this.searchRandomBeer = this.searchRandomBeer.bind(this)
    this.searchBeerById = this.searchBeerById.bind(this)
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

  // ******** API Methods *****************

  /*
   * -- DOWNSTREAM --
   * Main method that makes request to server
   * TODO Add to API Component
   */
  searchFromBreweryDB( params ) {
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

  /*
   * -- DOWNSTREAM --
   * Action method to select a random beer by parameters
   * TODO Create central API
   */
   searchRandomBeer( beerStyleID , srmColorID ) {
     const defaultParams = "beer/random?hasLabels=Y&withBreweries=Y";
     const searchParams = `${defaultParams}&styleId=${beerStyleID}&smrId=${srmColorID}`;

     return this.searchFromBreweryDB( searchParams )
   }

   /*
    * -- DOWNSTREAM --
    * Action method to search for a beer by its id
    * TODO Create central API
    */
   searchBeerById( id ) {
     const beerID = id
     const searchParams = `beer/${beerID}?&withBreweries=Y`

     return this.searchFromBreweryDB( searchParams )

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
                 resetSearchQuery={ this.resetSearchQuery }
                 searchRandomBeer={ this.searchRandomBeer }
                 />
             }
          />

        <Route path="/beer/:id"
            render= { (props) =>
              <Results { ...props }
                state= { this.state }
                searchBeerById= { this.searchBeerById }
                />
            }
          />
        </div>
      </HashRouter>

    );
  }
}

export default App;
