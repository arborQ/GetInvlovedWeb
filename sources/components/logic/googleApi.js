import { defer } from 'q';
console.log();
var googleService = null;

window.initGoogleApi = function(a,b,c,d){
  googleService = new google.maps.places.AutocompleteService();
}

export var isInitialized = function(){
  return !!googleService;
};
export var loadCities = function(input){
  var $defer = new defer();
  if(!isInitialized()){
    $defer.reject();
  }else{
    var { getQueryPredictions } = googleService;
    googleService.getQueryPredictions({ input }, (predictions, status) => {
      if(status != google.maps.places.PlacesServiceStatus.OK){
        $defer.resolve([]);
      }
      $defer.resolve(predictions);
    });
  }
  return $defer.promise;
}
