
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
                    
                    props.palavraoculta.splice(i,1,props.a)
                    acertos ++
                    props.setacerto(props.acerto + acertos)
                    if((props.acerto + acertos) == props.arrpalavra.length){
                        props.setresp('ganhou')
                        props.setdesabilitar(true)
                        props.setcorfinal('green')
                        props.setescolherpalavra(<div data-test="choose-word" onClick = {props.iniciarjogo} className="button"> Escolher Palavra</div>)
                    }
                }   
            }
        }else{
            erros ++   
            props.seterro(props.erro + 1)
            if((props.erro+1) == 6){
                props.setresp('perdeu')
                props.setdesabilitar(true)
                props.setcorfinal('red')
                props.setescolherpalavra(<div data-test="choose-word" onClick = {props.iniciarjogo} className="button"> Escolher Palavra</div>)
              
            }
           
        }
        
    }
  }

return(
    
    <button disabled ={props.selecionados.includes(props.a) ? true : props.desabilitar } data-test="letter" onClick={clicouletra} className={`${props.letra} ${ props.selecionados.includes(props.a) ? "lgray" : ""} ${ props.resp == 'ganhou' ? "lgray" : ""} ${ props.resp == 'perdeu' ? "lgray" : ""} `}>{props.a}</button>
)

}
