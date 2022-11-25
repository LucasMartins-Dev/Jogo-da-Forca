
import React from "react";
import Letras from './letras.js';
import Jogo from './jogo.js';
import Chute from './chute.js';
import palavras from "../palavras.js";

export default function Appp(props){
  let arrpalavra;
  const[escolherpalavra,setescolherpalavra] = React.useState(<div data-test="choose-word" onClick = {Iniciarjogo} className="button"> Escolher Palavra</div>)
    const[palavrajogo,setpalavrajogo] = React.useState('')
    const[palavraoculta,setpalavraoculta]=React.useState([])
    const[chute,setchute]=React.useState('')
    function Iniciarjogo(){
      const palavraescolhida = Math.floor(Math.random()*palavras.length);
      setpalavrajogo (palavras[palavraescolhida])
      setescolherpalavra(<div data-test="choose-word" className="button gray"> Escolher Palavra</div>)
      Habilitarletra()
    
  }
  const imagens = ['assets/forca0.png',
  'assets/forca1.png',
  'assets/forca2.png',
  'assets/forca3.png',
  'assets/forca4.png',
  'assets/forca5.png',
  'assets/forca6.png'
]
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const[selecionados,setselecionados]=React.useState([])
    console.log(selecionados)
    arrpalavra = palavrajogo.split('')
    console.log(palavrajogo)
    console.log(arrpalavra)
    const[resp,setresp]=React.useState('oi')
    const[letra,setletra]=React.useState('letra lgray')
    const[acerto,setacerto]=React.useState(0)
    const[erro,seterro]=React.useState(0)
    console.log(acerto)
    console.log(erro)
    console.log(resp)
    console.log(chute)
 

    function Habilitarletra(){
            setletra('letra')
    
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
      imagens = {imagens}
      erro ={erro}
     
      />
      <div className="letras">
        {alfabeto.map((a)=>
        <Letras 
        selecionados={selecionados} 
        a ={a}
        letra = {letra} 
        setletra={setletra}
        key={a}
        arrpalavra={arrpalavra}
        setselecionados={setselecionados}
        acerto = {acerto}
        setacerto= {setacerto}
        erro = {erro}
        seterro = {seterro}
        resp={resp}
        setresp = {setresp}
        setescolherpalavra = {setescolherpalavra}
        iniciarjogo = {Iniciarjogo}
        />
           )}
           </div>
      <Chute setchute = {setchute}
      chute = {chute}
      palavrajogo ={palavrajogo}
      setresp = {setresp}
      
      />
    </div>
    )

}