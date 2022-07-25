import React from "react";
import RenderFooter from "./renderizarRodape";
import imgSucesso from "./party.png"
import imgFalha from "./sad.png"

export default function RecallFooter({cont, setCont, simbolos, setSimbolos, arraySimbolos, arrayCorSimbolos}){

    console.log(arraySimbolos)

    const [tituloTextoResposta,setTituloTextoResposta] = React.useState("Putz...")
    const [textoResposta,setTextoResposta] = React.useState("Ainda faltam alguns... Mas não desanime!")
    
    if (cont===0){
        return (
            <div className="footer1">
                0/4 CONCLUIDOS
            </div>
        )    
    } else if (cont<4){
        return (
            <div className="footer2">
                {cont}/4 CONCLUIDOS 
                <RenderFooter arraySimbolos={arraySimbolos} arrayCorSimbolos={arrayCorSimbolos}/>
            </div>
        )
    } else {

        if (simbolos==="CCCC"){
            return (
                <div className="footer3">
                    <div className="titulo">
                        {<img src={imgSucesso} width="30px" height="30px" alt=""/>}
                        <h1>Parabéns!</h1>
                    </div>
                    <h2>Você não esqueceu de nenhum flashcard!</h2>
                    <h3>4/4 CONCLUIDOS </h3>
                <RenderFooter arraySimbolos={arraySimbolos} arrayCorSimbolos={arrayCorSimbolos}/>
                </div>
            )
        } else {

        return (

            <div className="footer3">
                    <div className="titulo">
                        {<img src={imgFalha} width="30px" height="30px" alt=""/>}
                        <h1>Putz...</h1>
                    </div>
                    <h2>Ainda faltam alguns... Mas não desanime!</h2>
                    <h3>4/4 CONCLUIDOS </h3>
                    <RenderFooter arraySimbolos={arraySimbolos} arrayCorSimbolos={arrayCorSimbolos}/>
            </div>
        )
    } 
}
}