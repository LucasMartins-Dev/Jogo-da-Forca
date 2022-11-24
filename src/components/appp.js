
import React from "react";
import Letras from './letras.js';
import Jogo from './jogo.js';
import Chute from './chute.js';
import palavras from "../palavras.js";

export default function Appp(){
  let arrpalavra;
  const[escolherpalavra,setescolherpalavra] = React.useState('')
    const[palavrajogo,setpalavrajogo] = React.useState('')
    function Iniciarjogo(){
      const palavraescolhida = Math.floor(Math.random()*palavras.length);
      setpalavrajogo (palavras[palavraescolhida])
      setescolherpalavra(<div className="button gray"> Escolher Palavra</div>)
      
      Habilitarletra()
    
  }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const[selecionados,setselecionados]=React.useState([])
    console.log(selecionados)
    arrpalavra = palavrajogo.split('')
    console.log(palavrajogo)
    console.log(arrpalavra)
  
    const[letra,setletra]=React.useState('letra lgray')
    const[tentar,settentar]=React.useState(false)
    const[cont,setcont]=React.useState(0)
    console.log(cont)
    function Habilitarletra(){
            setletra('letra')
            settentar(true)
            console.log('oi') 
    }

    return(
    <div className="App">
      <Jogo funct = {Habilitarletra}
      functi={Iniciarjogo}
      escolherpalavra ={escolherpalavra}
      setescolherpalavra={setescolherpalavra}
      palavrajogo = {palavrajogo}
      setpalavrajogo = {setpalavrajogo}
      palavras={palavras}
      />
      <div className="letras">
        {alfabeto.map((a)=>
        <Letras 
        selecionados={selecionados} 
        a ={a}
        letra = {letra} 
        setletra={setletra}
        tentativa = {tentar} 
        key={a}
        arrpalavra={arrpalavra}
        setselecionados={setselecionados}
        cont = {cont}
        setcont= {setcont}
        
        />
           )}
           </div>
      <Chute/>
    </div>
    )

}