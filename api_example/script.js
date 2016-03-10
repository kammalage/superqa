$(document).ready(function(){

	$(".get-data").click(getData);
})

function getData(){

	//var url = $(".input-url").val();
	var url = "https://quiz-world.herokuapp.com/users";
	if(!url) {
		alert("Error: Enter a proper url")
	}

	$.ajax({
		url:url,
		success: displayData
	})


}

function displayData(data){

	$(".result").empty();
	$ul = $("<ul></ul>");
	$(".result").append($ul);
	data.users.forEach(function(element){
		$ul.append("<li>" + element.email + "</li>");
	})

}

