import RecallHeader from "./recallHeader";
import RecallContainer from "./recallContainer";
import RecallFooter from "./recallFooter";
import React from "react";

export default function TelaRecall({cont, setCont, simbolos, setSimbolos}){

    const [arraySimbolos, setArraySimbolos]=React.useState([]);
    const [arrayCorSimbolos, setArrayCorSimbolos]=React.useState([]);

return (
    <div className="telaRecall">
        <RecallHeader />
        <RecallContainer cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos} arraySimbolos={arraySimbolos} setArraySimbolos={setArraySimbolos}  arrayCorSimbolos={arrayCorSimbolos} setArrayCorSimbolos={setArrayCorSimbolos}/>
        <RecallFooter cont={cont} setCont={setCont} simbolos={simbolos} setSimbolos={setSimbolos} arraySimbolos={arraySimbolos} arrayCorSimbolos={arrayCorSimbolos}/>
    </div>
    )
}