import RecallHeader from "./recallHeader";
import RecallContainer from "./recallContainer";
import RecallFooter from "./recallFooter";
import React from "react";

export default function TelaRecall({cont, setCont, simbolos, setSimbolos}){

return (
    <div className="telaRecall">
        <RecallHeader />
        <RecallContainer cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos}/>
        <RecallFooter cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos}/>
    </div>
    )
}