

export default function Chute (props){

    function chutarresposta(){
        if(props.palavrajogo == props.chute){
            props.setresp('ganhou')
            props.setdesabilitar(true)
            props.setcorfinal('green')
            props.setescolherpalavra(<div data-test="choose-word" onClick = {props.iniciarjogo} className="button"> Escolher Palavra</div>)
        }else{
            props.setresp('perdeu')
            props.setdesabilitar(true)
            props.setcorfinal('red')
            props.setescolherpalavra(<div data-test="choose-word" onClick = {props.iniciarjogo} className="button"> Escolher Palavra</div>)
        }
    }

    return(
        <div className="chute">
            <h1> Já sei a palavra !</h1>
            <input disabled={props.desabilitar} data-test="guess-input" onChange={event => props.setchute(event.target.value)} value={props.chute}></input>
            <div disabled={props.desabilitar} data-test="guess-button" onClick={chutarresposta} className="button-chute"> Chutar</div>
        </div>
    )
}