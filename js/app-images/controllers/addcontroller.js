let AddController = function(AddService, $state) {
  
  let vm = this;
  
  vm.addPhoto = addPhoto; 

  function addPhoto (image) {
    AddService.addImage(image).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  }
  

};

AddController.$inject = ['AddService', '$state'];

export default AddController;