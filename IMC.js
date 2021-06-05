let area = document.getElementById('res')

function Calcular(){
    let pes = document.getElementById('peso')
    let alt = document.getElementById('altura')
    let peso = Number(pes.value)
    let altura = Number(alt.value)

   

    let imc = peso / (altura * altura)

    if(peso == '' || peso <= 0 ){
        alert('Informe o peso')
        alert('Peso inválido!')
    }
    if(altura == '' || altura <= 0){
        alert('Informe a altura')
        alert('Altura inválida!')
    }
    if(imc < 18.5){
        area.innerHTML = `Seu IMC está ${imc.toFixed(2)} kg/m2. Abaixo do peso!`
    }
    if(imc >= 18.5 & imc <= 24.9){
        area.innerHTML = `Seu IMC está ${imc.toFixed(2)} kg/m2. Peso normal!`
    }
    if(imc >= 25 & imc <= 29.9){
        area.innerHTML = `Seu IMC está ${imc.toFixed(2)} kg/m2. Sobrepeso!`
    }
    if(imc >= 30 & imc <= 34.9){
        area.innerHTML = `Seu IMC está ${imc.toFixed(2)} kg/m2. Obesidade grau 1!`
    }
    if(imc >= 35 & imc <= 94.9){
        area.innerHTML = `Seu IMC está ${imc.toFixed(2)} kg/m2. Obesidade grau 2!`
    }
    if(imc >= 40){
        area.innerHTML = `Seu IMC está ${imc.toFixed(2)} kg/m2. (Obesidade grau 3!`
    }

    
 
}