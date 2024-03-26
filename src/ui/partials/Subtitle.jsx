
function Subtitle(props){

    return(
        <>
            <div className="conteudo-subtitle px-4">
                <p className="fs-4">{props.subtitle}</p>
            </div>
            <hr></hr>
            <div className="conteudo-card px-4">
                <img className="card-image" src='https://fmeldorado.com.br/wp-content/uploads/2024/01/ariana-grande-060523-4-329c2a0fc59b44d09608503641788567.jpg' alt="foto de perfil" />
                <div className="card ms-3">
                    <h2 className="card-title">Por {props.autor}</h2>
                    <p className="card-text">{props.data} | atualizado há {props.atualizado} dias</p>
                </div>
            </div>
        </>
    );
}

export default Subtitle