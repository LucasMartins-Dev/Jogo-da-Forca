
import React from "react";

export default function Letras(props){

let count = 0;

const[tentar,settentar]=React.useState('')


function Tentativa(){
    
    if(props.tentativa === true){
        settentar('lgray')
        console.log('true')
        count ++
        console.log(count)
           
    }else{
        
        console.log('false')
    }
    
}


return(
    
    <div onClick = {Tentativa} className={`${props.letra} ${tentar}`}>{props.a}</div>
     
)

}
