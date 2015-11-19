let coriImage = function(GalleryService, $timeout) {

  return {
      restrict: 'AE',
      scope: {
        image: "=image"
      },
      template: `
        <div class="tile">
          <img ng-src="{{image.photo}}">
          <span class="hidden"><i class="fa fa-heart"></i></span>
          <p class="likes-count">{{image.likes}} <i class="fa fa-heart"></i></p>
        </div>
      `,
      link: function (scope, element, attrs) {
        element.on('click', function () {
          console.log('you clicked it');
          element.find('span').removeClass('hidden').addClass('shown');
          $timeout(function() {
            element.find('span').removeClass('shown').addClass('hidden');
          }, 1000);
          GalleryService.addLike(scope.image).then( (res) => {
            console.log(res);
          });
        });
      }
    };

};

coriImage.$inject = ['GalleryService', '$timeout'];

export default coriImage;