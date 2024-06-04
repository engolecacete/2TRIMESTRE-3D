const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado:"como escreve xuazinega?",
        alternativas:[
            "suas nega",
            "schwarzenegger",
                ]
    },
    {
        enunciado:"complete: eu quero...?",
        alternativas:[
            "eu posso",
            "posso eu",
                ]
    },
    {
        enunciado:"deca ou trembo?",
        alternativas:[
            "os dois",
            "os dois dnv",
                ]
    },
    {
        enunciado:"bolsonaro ou lula",
        alternativas:[
            "Mito",
            "Lulinha Beta",
                ]
    },
    {
        enunciado:"comer terra é bom?",
        alternativas:[
            "sim",
            "naum",
                ]
    },  
];

let atual =0;
let pergunta.Atual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}

function mostraPergunta();
for(const alternativas of perguntaAtual{
const botaoalternativas = document.createElement("button")
botaoalternativas.textContent = alternativas;
caixaAlternativas.appendChild(botaoalternativas)
}
)
]
