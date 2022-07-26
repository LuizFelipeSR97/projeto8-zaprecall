import setinha from "./setinha.png";
import React from "react";

export default function Pergunta({tela, pergunta, resp, title, cont, setCont, simbolos, setSimbolos, arraySimbolos, setArraySimbolos, arrayCorSimbolos, setArrayCorSimbolos}){

    const [faseCard, setFaseCard] = React.useState(tela)
    const [classe, setClasse] = React.useState("pergunta1")

    if (faseCard==="1"){
        if (classe==="pergunta1"){
            return (
                <div className={classe}>
                    <h1>{title}</h1>
                    <ion-icon name="play-outline" onClick={()=>{setFaseCard("2")}}></ion-icon>
                </div>
            )
        } else if (classe==="pergunta1 perguntaResp1"){
            return (
                <div className={classe}>
                    <h1>{title}</h1>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
        } else if (classe==="pergunta1 perguntaResp2"){
            return (
                <div className={classe}>
                    <h1>{title}</h1>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        } else if (classe==="pergunta1 perguntaResp3"){
            return (
                <div className={classe}>
                    <h1>{title}</h1>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        }
        
    } else if (faseCard==="2"){
        return (
            <div className="pergunta2">
            <div className="cima">
                <h1>{pergunta}</h1>
            </div>
            <div className="baixo">
                <img src={setinha} onClick={()=>setFaseCard("3")} alt=""/>
            </div>
        </div>
        )
    } else if (faseCard==="3"){
        return (
            <div className="pergunta2">
                <div className="cima">
                    <h1>{resp}</h1>
                </div>
                <div className="baixo2">
                    <div className="acaoResp1" onClick={()=>{setFaseCard("1");setClasse("pergunta1 perguntaResp1");setCont(cont+1);setSimbolos(simbolos+"A");setArraySimbolos([...arraySimbolos,"close-circle"]);setArrayCorSimbolos([...arrayCorSimbolos,"red"])}}>Não lembrei</div>
                    <div className="acaoResp2" onClick={()=>{setFaseCard("1");setClasse("pergunta1 perguntaResp2");setCont(cont+1);setSimbolos(simbolos+"B");setArraySimbolos([...arraySimbolos,"help-circle"]);setArrayCorSimbolos([...arrayCorSimbolos,"orange"])}}>Quase não lembrei</div>
                    <div className="acaoResp3" onClick={()=>{setFaseCard("1");setClasse("pergunta1 perguntaResp3");setCont(cont+1);setSimbolos(simbolos+"C");setArraySimbolos([...arraySimbolos,"checkmark-circle"]);setArrayCorSimbolos([...arrayCorSimbolos,"green"])}}>Zap!</div>
                </div>
            </div>
        )
    }
}

//Tentar fazer cada emoji como um obj dentro de uma array e criar uma funcao pra renderizar em sequencia os objetos