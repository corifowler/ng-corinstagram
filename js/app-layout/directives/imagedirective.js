let coriImage = function(GalleryService) {

  return {
      restrict: 'AE',
      scope: {
        image: "=image"
      },
      template: `
        <div class="tile">
          <img ng-src="{{image.photo}}">
          <span><i class="fa fa-heart shown"></i></span>
          <p class="likes-count">{{image.likes}} <i class="fa fa-heart"></i></p>
        </div>
      `,
      link: function (scope, element, attrs) {
        element.on('click', function () {
          console.log('you clicked it');
          // element.children().removeClass('hidden').addClass('shown');
          GalleryService.addLike(scope.image).then( (res) => {
            console.log(res);
          });
        });
      }
    };

};

coriImage.$inject = ['GalleryService'];

export default coriImage;