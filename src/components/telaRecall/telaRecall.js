import RecallHeader from "./recallHeader";
import RecallContainer from "./recallContainer";
import RecallFooter from "./recallFooter";
import React from "react";
import contPergunta from "./pergunta"
// import simbolos from "./pergunta"

export default function TelaRecall(){

    const [cont, setCont] = React.useState(0)
    setCont(contPergunta)
    // const [simbolos, setSimbolos] = React.useState()

    return (
        <div className="telaRecall">
            <RecallHeader />
            <RecallContainer cont={cont}/>
            <RecallFooter cont={cont}/>
        </div>
    )
}

