
import React from "react";

export default function Letras(props){



function clicouletra(){
    const estaNaLista = props.selecionados.includes(props.a)
    if(!estaNaLista){
        let resul = 0;
        const aux = [...props.selecionados,props.a]
        props.setselecionados(aux)
        for(let i=0;i<props.arrpalavra.length;i++){
            
            if(aux[aux.length -1]=== props.arrpalavra[i]){
                console.log(props.arrpalavra[i])
               console.log(aux[aux.length -1])
                resul ++
                console.log(resul)
                props.setcont(props.cont + resul)
            }
            
        }
       
    }
  }


return(
    
    <div  onClick={clicouletra} className={`${props.letra} ${ props.selecionados.includes(props.a) ? "lgray" : ""} `}>{props.a}</div>
     
)

}
