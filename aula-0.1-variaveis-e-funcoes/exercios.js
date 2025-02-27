// Leandro Sabino Sueoka DSM2 Fatec Registro
// função simples
function saudacao() {
    console.log("Leandro S.Sueoka,36 anos,Cananéia");
  }
  
  saudacao();

// função parâmetros

function dividirNumeros(num1, num2) {
    if (num2 ===0) {
        console.log(`Não é possivel dividir por zero.`);
    } else {
        const resultado = num1 / num2;
        console.log(`O resultado da divisão ${num1} e ${num2} foi: ${resultado}`)
    }
}

dividirNumeros(30,2);

// função com retorno

function multiplicarTresNumeros(a,b,c) {
    const resultado = a * b * c;
    console.log(`Resultado:`, resultado);
    return resultado;

}

multiplicarTresNumeros(2,4,6);

// função com mais de um retorno

function verificarIdade(idade) {
if (idade >= 18){
    return "Maior de Idade";
    } else {
        return "Menor de Idade";
        
    }
}
console.log(verificarIdade(20));
console.log(verificarIdade(15));

// função anônima

const  verificarMedia = function(nota1+nota2){
    const media = (nota1+nota2) / 2;
    return media = <=5 ? "Reprovado" : "Aprovado";
}
console.log(verificarAprovacao(4, 6));
console.log(verificarAprovacao(3, 5));


// arrow function

const Triplo = x=> {
return x*3
}
console.log(`Função Triplo com arrow function. Resultado: ${Triplo(30)}.`)

// arrow function com mais de um parâmetro

const somarQuatroNumeros = (a,b,c,d) => a+b+c+d;
console.log(somarQuatroNumeros(5,15,25,35));

// função IIFE

(function(nome) {
    console.log(`Olá, ${nome}! Tenha um Òtimo Dia!`);
})("Professor Diego");

