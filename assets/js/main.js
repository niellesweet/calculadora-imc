var pesoUsuario = prompt("Ingresa tu peso en Kg");
var estaturaUsuario = prompt("Ingresa tu estatura en Mts");
var peso = parseFloat(pesoUsuario);
var estatura = parseFloat(estaturaUsuario);

function indice(){
	var calculo = (peso/(estatura*estatura));
	calculo = calculo.toFixed(1);
	 masaCorporal.innerHTML = "Tu IMC es de " + calculo ;
}

indice();