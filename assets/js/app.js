var boton = document.getElementById("boton"); //llamando al boton

boton.addEventListener("click", function()){

function add(){
	//tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea para que quede vacio
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('post');

	//cree un div que contiene cada comentario
	var newComments = document.createElement('div');

	//validé que textarea tenga un mensaje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}


	