import React from "react";

export default function Jogo(props){
    const palavras = [
        "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
        "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
        "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
        "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
        "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
        "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
        "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
        "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
        "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
        "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
        "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
        "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
        "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
        "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
        "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
        "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
        "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
        "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
        "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
        "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
        "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
        "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
        "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
    ]
    const[escolherpalavra,setescolherpalavra] = React.useState(<div onClick = {Escolherpalavra} className="button"> Escolher Palavra</div>)
    const[palavrajogo,setpalavrajogo] = React.useState('')
    function Escolherpalavra(){
        const palavraescolhida = Math.floor(Math.random()*palavras.length);
        setpalavrajogo (palavras[palavraescolhida])
        setescolherpalavra(<div className="button gray"> Escolher Palavra</div>)
        console.log(palavras[palavraescolhida])
        props.funct()
      
    }
    return(
        <div className='jogo'>
        <div>
            <img alt="img" src="assets/forca0.png"/>
        </div>
        <div className="palavras">
        {escolherpalavra}
        {palavrajogo}
        </div>
      </div>
        
    )
}