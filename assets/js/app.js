/*var boton = document.getElementById("boton"); //llamando al boton

boton.addEventListener('click', function(){
*/
function add(){


	//tomé el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpié el textarea para que quede vacio
	document.getElementById('comment').value = '';

	//llamé al contenedor que esta en el html (post)
	var cont = document.getElementById('post');

	//creé un div que contiene cada comentario
	var newComments = document.createElement('div');

	//creé parrafo 
	var parrafo = document.createElement('p');

	//validé que textarea tenga un mensaje, si no se a ingresado nada
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}
	//crear nodo de texto
	//transformar comments en un nodo de texto
	var transform = document.createTextNode(comments);

	//pasar con appendChild el nodo al parrafo
	parrafo.appendChild(transform);
	//pasar con appendChild el parrafo a newComments
	newComments.appendChild(parrafo);
	
	//crear hora
	var horaActual = new Date();
	//hora
	var hora = horaActual.getHours(); 
	//minutos
	var minutos = horaActual.getUTCMinutes();

	//cree nodo de texto con el nodo actual
	var realHours = document.createTextNode(hora + ":" + minutos);
	//crear varieble que contenga la hora
	var horaFin = document.createElement("p");
	//agregué nuestro p y nuestra hora al contenido final
	horaFin.appendChild(realHours);

	newComments.appendChild(horaFin);
	//y pasar newComments con appendChild a cont
	cont.appendChild(newComments);

}
function textAreaAdjust(o){
	o.style.height= "px";
	o.style.height= (25 + o.scrollHeight) + 'px';
}
//contador
var textArea = document.getElementById('comment');
comment.onkeydown = function(){
	var comentario = document.getElementById('comment');
	var saveCommit = comentario.value.length;
	var cont = document.getElementById('cont');
	cont.innerHTML = 140 - saveCommit; 
	//cambié de color los caracteres (green, red)
	if(saveCommit >= 120 && saveCommit <130){
		return cont.setAttribute('class','green');
	}
	if(saveCommit >= 130 && saveCommit < 140){
		return cont.setAttribute('class','red');
	} else{
		
	};
	if(saveCommit > 140){
		return document.getElementById('boton').disabled = true;
	} else {
		return document.getElementById('boton').enabled = true;
	}



}



















/*

var textarea = document.getElementById("post");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};

*/









	