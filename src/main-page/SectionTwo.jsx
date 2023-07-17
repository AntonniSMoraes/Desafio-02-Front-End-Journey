import "./SectionTwo.css";
import Card from "../commons/ColectionCard";
import { collectionsDummyData } from "../commons/collectionsDummyData";

export default function SectionTwo() {
  return (
    <section className="pg-two">
      
      <div className="txtb">
        <h4 className="title">Trending Collection</h4>
        <p className="txt">Checkout our weekly updated trending collection.</p>
      </div>
      <div className="cards">
        {collectionsDummyData.map((collection) => (
        <Card
          key ={collection.id}
          nomeArtista={collection.nomeArtista}
          imagemPrincipal={collection.imagemPrincipal}
          imagemPqna1={collection.imagemPqna1}
          imagemPqna2={collection.imagemPqna2}
          quantidadeImagens={collection.quantidadeImagens}
          nomePasta={collection.nomePasta}
          imagemAvatar={collection.imagemAvatar}
        />
        ))}
      </div>
    </section>
  );
}
