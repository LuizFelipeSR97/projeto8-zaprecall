import Pergunta from './pergunta'
// import deck from '../deck'

export default function RecallContainer(){
    
    return (
        <div className="container">
            <Pergunta tela="2" title='Pergunta 1' pergunta={'O que é o JSX?'} resp={'JSX é uma sintaxe para escrever HTML dentro do JS'}/>
            <Pergunta tela="1" title='Pergunta 2' pergunta={'O que é o JSX?'} resp={'JSX é uma sintaxe para escrever HTML dentro do JS'}/>
            <Pergunta tela="1" title='Pergunta 3' pergunta={'O que é o JSX?'} resp={'JSX é uma sintaxe para escrever HTML dentro do JS'}/>
            <Pergunta tela="1" title='Pergunta 4' pergunta={'O que é o JSX?'} resp={'JSX é uma sintaxe para escrever HTML dentro do JS'}/>
        </div>
    )
}

// export default function CriarDeck(){

//     const DeckPrincipal=[
//         {pergunta:"O que é JSX?", resp:"Uma extensão de linguagem do JavaScript"},
//         {pergunta:"O React é...?", resp:"uma biblioteca JavaScript para construção de interfaces"},
//         {pergunta:"Componentes devem iniciar com...?", resp:"Letra maiúscula"},
//         {pergunta:"O que podemos colocar dentro do JSX?", resp:"Expressões"},
//         {pergunta:"O ReactDOM nos ajuda a...?", resp:" Interagir com a DOM para colocar componentes React na mesma"},
//         {pergunta:" Usamos o npm para...?", resp:"Gerenciar os pacotes necessários e suas dependências"},
//         {pergunta:"Usamos props para...?", resp:"Passar diferentes informações para componentes"},
//         {pergunta:" Usamos estado (state) para...?", resp:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
//     ]

//     function shuffleArray(arr) {
//         // Loop em todos os elementos
//     for (let i = arr.length - 1; i > 0; i--) {
//             // Escolhendo elemento aleatório
//         const j = Math.floor(Math.random() * (i + 1));
//         // Reposicionando elemento
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     // Retornando array com aleatoriedade
//     return arr;
//     }

//     const deck = shuffleArray(deckPrincipal)
//     return deck
// }

const deckPrincipal=[
    {pergunta:"O que é JSX?", resp:"Uma extensão de linguagem do JavaScript"},
    {pergunta:"O React é...?", resp:"uma biblioteca JavaScript para construção de interfaces"},
    {pergunta:"Componentes devem iniciar com...?", resp:"Letra maiúscula"},
    {pergunta:"O que podemos colocar dentro do JSX?", resp:"Expressões"},
    {pergunta:"O ReactDOM nos ajuda a...?", resp:" Interagir com a DOM para colocar componentes React na mesma"},
    {pergunta:" Usamos o npm para...?", resp:"Gerenciar os pacotes necessários e suas dependências"},
    {pergunta:"Usamos props para...?", resp:"Passar diferentes informações para componentes"},
    {pergunta:" Usamos estado (state) para...?", resp:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]