import React from "react";

export default function Jogo(props){
    
  
   
    return(
        <div className='jogo'>
        <div>
            <img data-test="game-image" alt="img" src={`assets/forca${props.erro}.png`}/>
        </div>
        <div className="palavras">
        {props.escolherpalavra}
        <div className="palavra-oculta"> 
       <div></div> 
       <div data-test="word" data-answer={props.palavrajogo} className={`${'word'} ${props.corfinal}`}>{props.resp=='perdeu' || props.resp=='ganhou'? props.palavrajogo : props.palavraoculta}</div> 
        </div>
        
        </div>
      </div>
        
    )
}