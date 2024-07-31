const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua opinião sobre as IAs de informação [
            alternativa:[
    {
            texto: "Necessária para evolução humana",
            afirmacao:"você acha que o auxilio das IAs é essencial para a evolução, por conta de seu rápido processamento de informações"
    },
    {
        texto: "Não é necessária para evolução humana"
            afirmacao:"Você acha que Os humanos podem avançar rapidamente sua tecnologia sem a necessidade de usar as IAs e sua velocidade de processamento",
    },
    ]
        enunciado: "Com o avanço da IA e seu destaque, o seu professor de programção decide fazer um trabalho sobre a mesma, qual metodo voce utiliza para a realização do trabalho",
        alternativas: [
            {
                texto: 
            "Busca informações a parte e constrói sua própria conclusão sobre a IA e seu futuro.",
            afirmacao:"Você prefere buscar informações do seu jeito"
                },
            {
                "Pede para que Uma IA se defina e utiliza suas informações para a realização do trabalho.",
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o professor realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            "a favor da IA e sua evlução.",
            "contra a IA e sua evolução."
            afirmacao:"seu posicionamento em sala de aula foi uma das alternativas acima"
        ]
    },
    {
        enunciado: "precisou fazer um trabalho de artes representando IA , o que faz?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de arte, como model3D.",
            "Criar uma imagem utilizando um gerador de imagem de IA."
            afirmacao:"Você criou uma imagem"
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de uma matéria escolar para entregar no mês seguinte, uma pessoa do seu grupo decidiu fazer com ajuda de uma IA.ele não alterou a cópia do chat. O que você faz?",
        alternativas: [
           "a ajuda da IA é a mesma coisa que algo criado por uma inteligencia humana. portanto não precisa alterar nada.",
            "Por mais que a Ia seja uma tecnologia avançada, não deveriamos confiar totalmente nela e deveriamos revisar e complementar o texto."
        afirmacao:"você utilizou a IA"
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal=" ";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;




function mostroAlternativa(){
    for(const alternativa of perguntasAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent(botaoAlternativas);
        botaoAlternativas.addEventListener("click",()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraAlternativas();
    function respostaSelecionada(opcaoSelecionada){
        cost afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal = afirmacoes;
        atual++;
        mostraPergunta;
    }
function mostraResultado(){
    caixaPerguntas.textContent = "Esse texto é a introdução para juntar todas as afirmações das respostas..."
    textoResultado.textContent = historiaFinal
    caixaAlternativas.textContent ="";
    
}    
mostraPergunta();
