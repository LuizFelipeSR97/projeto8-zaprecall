import React from "react";
import img from "./logo.png";
import TelaRecall from "../telaRecall/telaRecall"

export default function TelaInicial({tela}){

    const [tela2, setTela2] = React.useState(tela);
    const [cont, setCont] = React.useState(0);
    const [simbolos, setSimbolos] = React.useState("")
    const simbolos2 = []

    if (tela2==="inicio"){
        return (
            <div className="telaInicial">
                <img src={img} alt=""/>
                <h1>ZapRecall</h1>
                <div className="start" onClick={() => setTela2("recall")} >
                    Iniciar Recall!
                </div>
            </div>
        )
    } else if (tela2==="recall"){
        return (
            <TelaRecall cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos} simbolos2={simbolos2}/>
        )
    }
}