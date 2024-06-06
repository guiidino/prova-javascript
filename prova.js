//02

var respostas =document.getElementById("respostas");
var nome = document.getElementById("nome");

function enviar()
{
    respostas.innerHTML = "Olá, " + nome.value + " tudo bem?"
}

//03
let metragem = document.getElementById("metragem");
let cm = document.getElementById("cm");


function converter()
{
    metragem.innerHTML = parseInt(cm.value) / 100 + " m.";
}

//04
let ansu = document.getElementById("ansu");
let resultadoan = document.getElementById("resultadoan");
let resultadosu = document.getElementById("resultadosu");

function numeros()
{
    resultadoan.innerHTML = parseInt(ansu.value) - 1;
    resultadosu.innerHTML = parseInt(ansu.value) + 1;
}

//05
var comp1 = document.getElementById("comp1")
var comp2 = document.getElementById("comp2")
let maior = document.getElementById("maior")
function resulta()
{
    if(comp1.value > comp2.value)
    {
        
        maior.innerHTML = comp1.value
        
    }

    else(comp1.value < comp2.value)
    {
        
        maior.innerHTML = comp2.value

    }
}

//06
let salario = document.getElementById("salario");
let aumento = document.getElementById("aumento");

function aumenta(){
    if(salario.value > 1250){
        aumento.innerHTML = parseInt(salario.value)  *0.10;
    }
    else{
        aumento.innerHTML = parseInt(salario.value)  *0.15;
    }
}






//07
a = 1
while(a <= 100)
    {
        console.log(a)
        a = a +1;
    }

//08
b = 0
while(b <= 50)
    {
        console.log(b)
        b = b +5;
    }

//09
c = 100
while(c >= 0)
    {
        console.log(c)
        c = c -10;
    }