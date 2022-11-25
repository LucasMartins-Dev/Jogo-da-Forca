
import React from "react";

export default function Letras(props){



function clicouletra(){
    const estaNaLista = props.selecionados.includes(props.a)
    const verificarerro = props.arrpalavra.includes(props.a)
    if(!estaNaLista){
        let acertos = 0;
        let erros = 0;
        const aux = [...props.selecionados,props.a]
        props.setselecionados(aux)
        if(verificarerro){
            for(let i=0;i<props.arrpalavra.length;i++){
            
                if(aux[aux.length -1]=== props.arrpalavra[i]){
                    acertos ++
                    console.log(acertos)
                    props.setacerto(props.acerto + acertos)
                }   
            }
        }else{
            erros ++   
            console.log(erros) 
            props.seterro(props.erro + 1)
           
        }
        
    }
  }

return(
    
    <div  onClick={clicouletra} className={`${props.letra} ${ props.selecionados.includes(props.a) ? "lgray" : ""} `}>{props.a}</div>
     
)

}
