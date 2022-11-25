

export default function Chute (props){

    function chutarresposta(){
        if(props.palavrajogo == props.chute){
            props.setresp('ganhou')
        }else{
            props.setresp('Perdeu')
        }
    }

    return(
        <div className="chute">
            <h1> Já sei a palavra !</h1>
            <input data-test="guess-input" onChange={event => props.setchute(event.target.value)}></input>
            <div data-test="guess-button" onClick={chutarresposta} className="button-chute"> Chutar</div>
        </div>
    )
}