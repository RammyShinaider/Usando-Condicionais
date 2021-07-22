let nome = prompt("Informe o seu nome piloto:")
let veloc = 0
let newVeloc = prompt("Qual velocidade gostaria para acelerar?")
let conf = confirm("Confirme a velocidade " + newVeloc + "km/h")

if(conf){
    veloc = newVeloc
}

if(veloc <= 0){
    alert("Nave está parada. Considere partir e aumentar a  velocidade.")
} 
else if(veloc < 40){
    alert("Você está devagar, podemos aumentar.")
}
else if(veloc >= 40 && veloc < 80){
    alert("Parece uma boa velocidade para manter.")
}
else if(veloc >= 80 && veloc <100){
    alert("Velocidade alta. Considere diminuir.")
}
else if(veloc >= 100){
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do piloto: " + nome + "\n" + "Velocidade da nave: " + newVeloc + "km/h")
