let coriImage = function(GalleryService) {

  return {
      restrict: 'AE',
      scope: {
        image: "=image"
      },
      template: `
        <ul class="small-block-grid-3">
          <li><img ng-src="{{image.photo}}"></li>
        </ul>
      `,
      link: function (scope, element, attrs) {
      }
    };

};

coriImage.$inject = ['GalleryService'];

export default coriImage;