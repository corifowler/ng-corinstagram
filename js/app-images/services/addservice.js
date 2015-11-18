let AddService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/corinstagram';

  this.addImage = addImage;

  let Image = function (imageObj) {
    this.photo = imageObj.photo;
    this.caption = imageObj.caption;
  };

  function addImage (imageObj) {
    let i = new Image(imageObj);
    return $http.post(url, i, PARSE.CONFIG);
  }
  

};

AddService.$inject = ['$http', 'PARSE'];

export default AddService;