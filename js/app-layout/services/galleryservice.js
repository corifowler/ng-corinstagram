let GalleryService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/corinstagram';
  
  this.getGallery = getGallery;

  function getGallery () {
    return $http.get(url, PARSE.CONFIG);
  }

};

GalleryService.$inject = ['$http', 'PARSE'];

export default GalleryService;