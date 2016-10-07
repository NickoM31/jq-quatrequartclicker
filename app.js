$(document).ready(function(){

	var counter = 0;
	var tabl = [
		"c'est bon!!" ,"allez, encore un autre" , 
		"je commence à saturer!" , "bllluuuurrrppp" , 
		"c'est fini pour moi le quatre-quartclicker!!"
	];
	
	$(".cake-is-a-lie").click(function(){

		counter++;

		$(".counter").text(counter);

		if(counter % 3 === 0){
			var aleat = tabl[Math.floor(Math.random() * tabl.length)];
			alert(aleat)
		}
	});

});
