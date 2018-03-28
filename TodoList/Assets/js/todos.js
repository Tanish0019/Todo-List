//Striking off a todo
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
}); 

//Removing a todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Used to stop event bubbling
	event.stopPropagation();
});

//Adding new todo
$("input[type='text']").keypress(function(event){
	if( event.which === 13 ) {
		var todoText = $(this).val();
		var newTodo = "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>";
		$("ul").append(newTodo);
		$(this).val("");
	}
});

//Toggling plus and minus icon
$("#form").click(function(){
	$("input[type='text']").fadeToggle(500);
	$(this).toggleClass("fa-plus fa-minus");
});