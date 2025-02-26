//comentario em linha
/*Comentario
em bloco
...
*/
// CTRL + ; = atalho

//Declaração de variáveis no JS
//Por questões de segurança, evitar o uso de VAR
//No escopo global, CONST não pode ser alterado
//CONST x LET x VAR
const nome = "Érlon"; //uma constante precisa de um valor inicial
let Nome; //Permite iniciar a variável vazia
//const nome = "Pedro" -> resulta em um erro pois não posso atribuir variável novamente
//let Nome -> resulta em um erro
var cor = "Azul";
var cor = "Amarelo";
let cidade = " Registro";
cidade = "Registro"; //let permite alterar o valor da variável
const message = "Hello, world! Inciando estudos em Javascript";
console.log(message);

//Typeof (esse comando exibira o tipo da variável)

const estado = "SP"; //const precisa ter um valor inicial
const idade = "18";
let endereco;
console.log(typeof estado);
//ctrl + " para mostrar o terminal
//F8 para executar o codigo - o console log vai informar que a constante idade é uma string
console.log(typeof idade);
console.log(typeof endereco);
//O Javascript é um linguagem de tipagem dinamica (de acordo com o valor da variavel) e
//tipagem fraca (se vc declarar um numero como string, é possivel mesmo assim fazer uma soma com ele)

///////////////////////////////////q

//Tipos de funções no Javascript
function minhaFuncao() {}
console.log(typeof minhaFuncao);

//Função simples
function saudacao() {
  console.log("Olá, bem-vindo!");
}

saudacao();

//Função com parâmtro/argumento
//Parâmetro -> é um dado que a função recebe
//Argumento -> é um dado que é enviado para a função
//Javascript é case sensitive, diferencia maiúsculas e minúsculas
function Saudacao(nome) {
  //Parâmetro, é o que a função recebe
  console.log("Olá, bem-vindo" + nome); //concatenando uma variável
  //usando template atrings ' '
  console.log(`olá , bem vindo ${nome}`);
  // ${} -> Placeholder
}
Saudacao("Leandro"); //Argumento, é quando eu invoco a função e insiro um valor

//função com mais de um parâmetro
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

//função com retorno
function soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois números foi ${soma(2, 6)}.`);

//função com mais de um retorno
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

//função anônima
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é ${dobro(15)}!`);

// shift+alt+f (coloca ; automaticamente)

// arrow function com parâmetro único
// função flecha
// => função
const Dobro = x => {
    return x*2
}
console.log(`função dobro com arrow function. Resultado: ${Dobro(20)}.`)

//arrow function com mais de um parâmetro
const calc =(num1, operador , num2) =>{
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operção é ${calc(6,'*', 6)}.`)

// simplificando arrow function

const Calc = (num1, operador , num2) => eval(`${num1} ${operador} ${num2}.`)
console.log(`O resultado da operação é ${Calc(7,'*', 7)}`)

// IIFE - immediately Invoked function Expression
// função imediata - última \o/
const iife = (function(){
    console.log("estou sendo executada imediadmente...")
})()

// IIFE com parâmetro 
const start = (function(app) {
    console.log(`executando imediatamente o app ${app}.`)
})("whatsapp")

//git add .
// git commit -m "@seu-username"
//git push