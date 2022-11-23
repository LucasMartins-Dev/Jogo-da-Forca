
import React from "react";
import Letras from './letras.js';
import Jogo from './jogo.js';
import Chute from './chute.js';

export default function Appp(){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const[letra,setletra]=React.useState('letra lgray')
    const[tentar,settentar]=React.useState(false)
    function Habilitarletra(){
            setletra('letra')
            settentar(true)
            console.log('oi') 
    }

    return(
    <div className="App">
      <Jogo funct = {Habilitarletra}/>
      <div className="letras">
        {alfabeto.map((a)=><Letras a ={a}letra = {letra} setletra={setletra}tentativa = {tentar} key={a}/>
           )}
           </div>
      <Chute/>
    </div>
    )

}