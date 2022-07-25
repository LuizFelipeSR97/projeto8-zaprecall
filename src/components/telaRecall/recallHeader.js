import logoPequeno from "./logo-pequeno.png"
import TelaInicial from '../telaInicial/telaInicial';

export default function RecallHeader(){
    return (
        <div className="header">
            <img src={logoPequeno} alt=""/>
            ZapRecall
        </div>
    )
}