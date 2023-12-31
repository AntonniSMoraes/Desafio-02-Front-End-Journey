import "./ColectionCard.css";

// receberá props para as cards
export default function ColectionCard(props) {
  const {
    id,
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
      <a href={"/nft-page/"+id}><img className="img-conf" src={imagemPrincipal} /></a>
      <div className="men-img-order">
        <a href={"/nft-page/"+id}> <img className="men-img-conf" src={imagemPqna1} /></a>
        <a href={"/nft-page/"+id}> <img className="men-img-conf" src={imagemPqna2}/></a>
        <a href={"/nft-page/"+id} className="more"><p>{quantidadeImagens}</p></a>
      </div>
      <h5 className="folder-name">{nomePasta}</h5>
      <a href={"/artists/"+id} className="remove-style"><div className="artist">
        <img className="avatar" src={imagemAvatar}/>
        <p className="p-style">{nomeArtista}</p>
      </div></a>
    </div>
  );
}
