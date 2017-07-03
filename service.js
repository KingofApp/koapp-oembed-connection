(function() {
  'use strict';
  angular
    .module('oembed.api', [])
    .service('oembedAPI', oembedAPI);

  oembedAPI.$inject = ['$q', '$http'];

  function oembedAPI($q, $http) {

    return {
      getJson: getJson
    }

    function getJson(urlapi, urloembed) {
      var deferred = $q.defer();
      $http.get(urlapi + "?url=" + urloembed)
        .then(function(response) {
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });
      return deferred.promise;
    }

  }
}());
