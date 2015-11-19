let GalleryService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/corinstagram';
  
  this.getGallery = getGallery;
  this.addLike = addLike;
  this.toggleClass = toggleClass;

  function toggleClass () {
    this.element.removeClass('hidden').addClass(shown);
  }

  function getGallery () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addLike (imgObj) {
    imgObj.likes = imgObj.likes + 1;
    return $http.put(url + '/' + imgObj.objectId, imgObj, PARSE.CONFIG);
  }

};

GalleryService.$inject = ['$http', 'PARSE'];

export default GalleryService;