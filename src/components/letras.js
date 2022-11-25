
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
                    props.setacerto(props.acerto + acertos)
                    if((props.acerto + acertos) == props.arrpalavra.length){
                        props.setresp('ganhou')
                        
                    }
                }   
            }
        }else{
            erros ++   
            props.seterro(props.erro + 1)
            if((props.erro+1) == 6){
                props.setresp('Perdeu')
                
            }
           
        }
        
    }
  }

return(
    
    <div  onClick={clicouletra} className={`${props.letra} ${ props.selecionados.includes(props.a) ? "lgray" : ""} `}>{props.a}</div>
     
)

}
