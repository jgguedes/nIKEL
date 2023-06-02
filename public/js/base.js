const nome = "Johnnie Guedes";
let nome2 = "";
let pessoaDefault = {
    nome:"Johnnie Guedes",
    idade: "39",
    trabalho: "Estudante"
}
let nomes = ["Johnnie Guedes","Gabi Silva","Lori Guedes"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome:"Johnnie Guedes",
        idade: "39",
        trabalho: "Estudante"

},
 {
        nome:"Gabi Guedes",
        idade: "42",
        trabalho: "Mentora"
 }
];

function alterarNome() {
    nome2 = "Lori Guedes";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
    
}

function adicionarPessoas(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("___________Imprimir Pessoas_________.");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}


imprimirPessoas();

adicionarPessoas({
    nome: "Lori Guedes",
    idade: "60",
    trabalho: "Aposentada" 
});

console.log(pessoas);

