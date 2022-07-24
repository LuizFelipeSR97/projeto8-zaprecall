import React from "react";

export default function RecallFooter({cont}){

    const [tituloTextoResposta,setTituloTextoResposta] = React.useState("Putz...")
    const [textoResposta,setTextoResposta] = React.useState("Ainda faltam alguns... Mas não desanime!")
    const simbolos2=<>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    </>

    if (simbolos2===<>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    <ion-icon name="checkmark-circle" class="md hydrated green"></ion-icon>
    </>) {
        setTituloTextoResposta("Parabéns!");
        setTextoResposta("Você não esqueceu de nenhum flashcard!")
    }
    
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
                <div className="ordemResp">
                    {simbolos2}
                </div>
            </div>
        )
    } else {
        return (
            <div className="footer3">
                
                <h1>{tituloTextoResposta}</h1>
                <h2>{textoResposta}</h2>
                <h3>{cont}/4 CONCLUIDOS </h3>
                
                <div className="ordemResp">
                    {simbolos2}
                </div>
            </div>
        )
    } 
}