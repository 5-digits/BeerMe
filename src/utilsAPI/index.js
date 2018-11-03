import axios from 'axios';

const beerAPI = {
  /*
   * Main method that makes request to server
   */
  searchFromBreweryDB : ( route = '' , params = {} ) => {
    // TODO move api key to env variable
    const apiKey = "2ac80c8189c3741bc212ff55d424eee0";
    const CORSBridge = "https://cors-anywhere.herokuapp.com";
    const breweryDB = "https://api.brewerydb.com/v2";

    return (
      axios.get(`${CORSBridge}/${breweryDB}/${route}`, {
        params: {
          ...params,
          key: apiKey
        }
      })
      .then( resp => {
        return resp.data.data
      })
      .catch( error => {
        return ({
          ...error.response,
          error: true
        })
      })
    )
  },

  /*
   * Action method to select a random beer by parameters
   */
   searchRandomBeer : ( beerStyleID , srmColorID ) => {
     const requestPath = "beer/random"
     return beerAPI.searchFromBreweryDB( requestPath, {
       hasLabels: "Y",
       withBreweries: "Y",
       styleId: beerStyleID,
       smrId: srmColorID
     })
   },

   /*
    * Action method to search for a beer by its id
    */
   searchBeerById : ( beerID ) => {
     const requestPath = `beer/${beerID}`
     return beerAPI.searchFromBreweryDB( requestPath , { withBreweries: "Y" })
   },

}

export default beerAPI;
