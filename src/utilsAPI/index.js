
const beerAPI = {
  /*
   * Main method that makes request to server
   */
  searchFromBreweryDB : ( params ) => {
    // TODO move api key to env variable
    const apiKey = "2ac80c8189c3741bc212ff55d424eee0";
    const CORSBridge = "https://cors-anywhere.herokuapp.com";
    const breweryDB = "http://api.brewerydb.com/v2";

    return fetch( `${CORSBridge}/${breweryDB}/${params}&key=${apiKey}`)
      .then( blob => blob.json() )
      .then( resp => {
        return resp.data
      })
      .catch( error => {
        console.error(error);
        // TODO on Error send to error page
          // Error page should include Beer recommendations - Check if Brewery offers option of more than one random beer
      });
  },

  /*
   * Action method to select a random beer by parameters
   */
   searchRandomBeer : ( beerStyleID , srmColorID ) => {
     const defaultParams = "beer/random?hasLabels=Y&withBreweries=Y";
     const searchParams = `${defaultParams}&styleId=${beerStyleID}&smrId=${srmColorID}`;
     return beerAPI.searchFromBreweryDB( searchParams )
   },

   /*
    * Action method to search for a beer by its id
    */
   searchBeerById : ( id ) => {
     const beerID = id
     const searchParams = `beer/${beerID}?&withBreweries=Y`
     return beerAPI.searchFromBreweryDB( searchParams )
   },

}

export default beerAPI;
