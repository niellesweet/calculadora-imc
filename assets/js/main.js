var pesoUsuario = prompt("cual es tu peso?");
var estaturaUsuario = prompt("cual es tu estatura?");
var peso = parseFloat(pesoUsuario);
var estatura = parseFloat(estaturaUsuario);

function indice(){
 masaCorporal.innerHTML = peso/(estatura*estatura);
}

indice();