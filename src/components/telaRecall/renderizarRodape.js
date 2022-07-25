export default function RenderFooter({arraySimbolos, arrayCorSimbolos}){
    const objeto={}
    const array=[]
    console.log(arrayCorSimbolos)
    console.log(arraySimbolos)
     return (
         <div className="ordemResp">
         {arraySimbolos.map(simbolo => <div><ion-icon name={simbolo} class="md hydrated"></ion-icon></div>)}
         </div>
     )
}

// export default function RenderFooter({arraySimbolos, arrayCorSimbolos}){
//     const simbolos = arraySimbolos
//     const corSimbolos = arrayCorSimbolos
//     console.log(corSimbolos)
//     console.log(simbolos)
//     return (
//         <>
//         {simbolos.map(simbolo => <div><ion-icon name={simbolo} class="md hydrated red"></ion-icon></div>)}
//         </>
//     )
// }

//Tentar fazer sem ser pelo map, com for e mudando a cor na classe de acordo com o nome