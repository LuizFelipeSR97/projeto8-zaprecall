import Pergunta from './pergunta'

export default function RecallContainer({cont, setCont, simbolos, setSimbolos}){
    
    return (
        <div className="container">
            <Pergunta tela="1" title='Pergunta 1' pergunta={deckPrincipal[0].pergunta} resp={deckPrincipal[0].resp} cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos}/>
            <Pergunta tela="1" title='Pergunta 2' pergunta={deckPrincipal[1].pergunta} resp={deckPrincipal[1].resp} cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos}/>
            <Pergunta tela="1" title='Pergunta 3' pergunta={deckPrincipal[2].pergunta} resp={deckPrincipal[2].resp} cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos}/>
            <Pergunta tela="1" title='Pergunta 4' pergunta={deckPrincipal[3].pergunta} resp={deckPrincipal[3].resp} cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos}/>
        </div>
    )
}


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

function misturarDeck(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

misturarDeck(deckPrincipal)