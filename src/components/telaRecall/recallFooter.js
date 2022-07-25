import React from "react";
import RenderFooter from "./renderizarRodape.js";
import imgSucesso from "./party.png"
import imgFalha from "./sad.png"

export default function RecallFooter({cont, setCont, simbolos, setSimbolos, simbolos2}){

    const [tituloTextoResposta,setTituloTextoResposta] = React.useState("Putz...")
    const [textoResposta,setTextoResposta] = React.useState("Ainda faltam alguns... Mas não desanime!")
    const [emojiSrc, setEmojiSrc] = React.useState("https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-dos-Simpsons-em-png.png")

    // if (simbolos==="CCCC") {
    //     setTituloTextoResposta("Parabéns!");
    //     setTextoResposta("Você não esqueceu de nenhum flashcard!")
    //     setEmojiSrc("https://imagensemoldes.com.br/wp-content/uploads/2020/06/Imagem-Goku-PNG-683x1024.png")
    // }
    
    
    if (cont===0){
        return (
            <div className="footer1">
                0/4 CONCLUIDOS
            </div>
        )    
    } else if (cont<4){
        const simbolos3=[...simbolos2].push("B")
        return (
            <div className="footer2">
                {cont}/4 CONCLUIDOS 
                <div className="ordemResp">
                {simbolos}
                </div>
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
                    
                    <div className="ordemResp">
                        <>
                        <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
                        <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
                        <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
                        <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
                        </>
                    </div>
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
                    
                    <div className="ordemResp">
                        <>
                        {simbolos}
                        </>
                    </div>
                </div>
        )
    } 
}
}