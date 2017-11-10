var boton = document.getElementById("boton"); //llamando al boton

boton.addEventListener('click', function(e) {

	//tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea para que quede vacio
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('post');

	//cree un div que contiene cada comentario
	var newComments = document.createElement('div');

	//crear parrafo
	var parrafo = document.createElement('p');

	//validé que textarea tenga un mensaje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}
	//transformar comments en un nodo de texto
	var transform = document.createTextNode(comments);
	//pasar con appendChild el nodo al parrafo
	parrafo.appendChild(transform);
	//pasar con appendChild el parrafo a newComments
	newComments.appendChild(parrafo);
	//y pasar newComments con appendChild a cont 
	cont.appendChild(newComments);


	e.preventDefault();

})






	