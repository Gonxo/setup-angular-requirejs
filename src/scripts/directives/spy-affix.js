define(['angular'],

function(angular) {
	
	return {
		name: 'spyAffix',

		directive: ['ScrollSpy', function(ScrollSpy) {

			var lastOffset = 0;

			return {
				link: function (scope, element, attrs) {

					// Set 'affix' class only on scroll up
					ScrollSpy.addCallback(function(ev){
						if(lastOffset > this.pageYOffset && this.pageYOffset > 0) {
							element.addClass('affix');
						} else {
							element.removeClass('affix');
						}

						lastOffset = this.pageYOffset;
					});
				}
			};
		}]
	};

});