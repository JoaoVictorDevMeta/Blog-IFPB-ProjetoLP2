import { Link } from 'react-router-dom';

function Subtitle(props) {
  return (
    <>
      <div className="conteudo-subtitle px-4">
        <p className="fs-4">{props.subtitle}</p>
      </div>
      <hr></hr>
      <div className="conteudo-card px-4">
        <img
          className="card-image"
          src={
            props.image ||
            'https://th.bing.com/th/id/OIP.6UhgwprABi3-dz8Qs85FvwHaHa?rs=1&pid=ImgDetMain'
          }
          alt="foto de perfil"
        />
        <div className="card ms-3">
          <Link
            to={`/profile/${props.link}`}
            className="card-title link-body-emphasis link-offset-2 link-underline-opacity-0"
          >
            Por {props.autor}
          </Link>
          <p className="card-text">
            {props.data}{' '}
            {props.dif && `| atualizado há ${props.atualizado} dias`}
          </p>
        </div>
      </div>
    </>
  );
}

export default Subtitle;
