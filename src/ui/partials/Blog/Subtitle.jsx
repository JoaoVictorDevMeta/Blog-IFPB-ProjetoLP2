
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
                    <a href='/profile/1' className="card-title link-body-emphasis link-offset-2 link-underline-opacity-0">Por {props.autor}</a>
                    <p className="card-text">{props.data} | atualizado há {props.atualizado} dias</p>
                </div>
            </div>
        </>
    );
}

export default Subtitle