import "./ColectionCard.css";

// receberá props para as cards
export default function ColectionCard(props) {
  const {
    nomeArtista,
    imagemPrincipal,
    imagemPqna1,
    imagemPqna2,
    quantidadeImagens,
    nomePasta,
    imagemAvatar,
  } = props;

  return (
    <div className="card-conf">
      {/* deve direcionar para nfts */}
      <a href="/"><img className="img-conf" src={imagemPrincipal} /></a>
      <div className="men-img-order">
        <a href="/"> <img className="men-img-conf" src={imagemPqna1} /></a>
        <a href="/"> <img className="men-img-conf" src={imagemPqna2}/></a>
        <a href="/" className="more"><p>{quantidadeImagens}</p></a>
      </div>
      <h5 className="folder-name">{nomePasta}</h5>
      <div className="artist">
        <img className="avatar" src={imagemAvatar}/>
        <p className="p-style">{nomeArtista}</p>
      </div>
    </div>
  );
}
