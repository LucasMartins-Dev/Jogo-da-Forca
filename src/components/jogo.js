import React from "react";

export default function Jogo(props){
    
   
   
    return(
        <div className='jogo'>
        <div>
            <img alt="img" src="assets/forca0.png"/>
        </div>
        <div className="palavras">
        <div onClick = {props.functi} className="button"> Escolher Palavra</div>
        {props.palavrajogo}
        </div>
      </div>
        
    )
}