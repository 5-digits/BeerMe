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

const Favorites = Loadable({
  loader: () => import('./Containers/Favorites'),
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
    this.resetSearchResults = this.resetSearchResults.bind(this)

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
  updateSearchResults( newResults = {} ) {
    this.setState({
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
   */
  resetSearchResults() {
    this.updateSearchResults()
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
                 updateSearchResults={this.updateSearchResults}
                 />
             }
          />

        <Route path="/beer/:id"
            render= { (props) =>
              <Results { ...props }
                state= { this.state }
                updateSearchResults={ this.updateSearchResults }
                resetSearchResults= { this.resetSearchResults }
                />
            }
          />
        <Route path="/favorites" component={ Favorites } />
        </div>
      </HashRouter>

    );
  }
}

export default App;
