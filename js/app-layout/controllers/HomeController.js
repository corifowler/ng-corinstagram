let HomeController = function(GalleryService) {

  let vm = this;

  vm.images = [];

  getPhotos();

  function getPhotos () {
    GalleryService.getGallery().then( (res) => {
      vm.images = res.data.results;
    });    
  }



};

HomeController.$inject = ['GalleryService'];

export default HomeController;