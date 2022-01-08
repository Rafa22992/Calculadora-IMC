// Calculo: peso / altura * altura

function principal(){
let form = document.querySelector(".form")
let saida = document.querySelector(".saida");

function eventoBotao(evento){

evento.preventDefault()
let peso = form.querySelector("#peso");
let altura = form.querySelector("#altura");
let resul = peso.value / (altura.value * altura.value);

if (resul < 18.5){
    saida.innerHTML = `<strong>${resul.toFixed(1)}</strong> Abaixo do peso`;
}
else if (resul >= 18.5 && Number(resul) <= 24.9){
    saida.innerHTML =`<strong>${resul.toFixed(1)}</strong> Peso Normal`
}
else if(resul >= 25 && resul <= 29.9){
    saida.innerHTML =`<strong>${resul.toFixed(1)}</strong> Sobrepeso`
}
else if(resul >= 30 && resul <= 34.9){
    saida.innerHTML = `<strong>${resul.toFixed(1)}</strong> Obesidade GRAU 1`
}
else if(resul >= 35 && resul <= 39.9){
    saida.innerHTML = `<strong>${resul.toFixed(1)}</strong> Obesidade GRAU 2`
}

else if (resul > 40){
    saida.innerHTML = `<strong>${resul.toFixed(1)}</strong> Obesidade GRAU 3`
}

else{
    saida.innerHTML = "Valor Inválido"
}

} // fecha função botão
form.addEventListener("submit",eventoBotao)
}

principal()


