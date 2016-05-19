$(document).ready(function() {
	$("#agregar").click(function() {
		var nuevo = parseInt($("li:last()").text());
		var colors = $('#dos').val();
		var algo = $('#uno').val();
	
		if(algo === ""){algo = "";}

		$("ul:last()").append("<li><span style='color:"+colors+";'>"+algo+"</span></li>");	
	});

	$("#eliminar").click(function() {
		var nuevo = parseInt($("li:first()").text());
		$("li:first()").remove();
	});
});