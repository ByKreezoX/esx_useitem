$(function(){
	window.onload = function(e){
		window.addEventListener('message', function(event){

			var item = event.data;
			if (item !== undefined && item.type === "affiche") {

				if (item.display === true) {
					$('#affiche').delay(1000).fadeIn( "slow" );
				} else if (item.display === false) {
					$('#affiche').fadeOut( "slow" );
				}
			}
		});
	};
});