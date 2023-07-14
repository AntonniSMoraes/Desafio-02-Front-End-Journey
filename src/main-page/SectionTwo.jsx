import "./SectionTwo.css";
import Card from "../commons/ColectionCard";

const objeto = {
  one: {
    nomeArtista: "MrFox",
    imagemPrincipal:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-3@2x.png",
    imagemPqna1:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-4@2x.png",
    imagemPqna2:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-5@2x.png",
    quantidadeImagens: "1025+",
    nomePasta: "DSGN Animals",
    imagemAvatar:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png",
  },
  two: {
    nomeArtista: "Shroomie",
    imagemPrincipal:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png",
    imagemPqna1:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-2@2x.png",
    imagemPqna2:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-3@2x.png",
    quantidadeImagens: "6+",
    nomePasta: "Magic Mushrooms",
    imagemAvatar:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png"
  },
  three: {
    nomeArtista: "BeKind2Robots",
    imagemPrincipal:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-5@2x.png",
    imagemPqna1:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-10@2x.png",
    imagemPqna2:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-11@2x.png",
    quantidadeImagens: "1025+",
    nomePasta: "Disco Machines",
    imagemAvatar:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png",
  },
};

export default function SectionTwo() {
  return (
    <section className="pg-two">
      <div className="pg-two-txtbox">
        <h4 className="pg-two-title">Trending Collection</h4>
        <p className="pg-two-txt">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="cards">
        <Card
          nomeArtista={objeto.one.nomeArtista}
          imagemPrincipal={objeto.one.imagemPrincipal}
          imagemPqna1={objeto.one.imagemPqna1}
          imagemPqna2={objeto.one.imagemPqna2}
          quantidadeImagens={objeto.one.quantidadeImagens}
          nomePasta={objeto.one.nomePasta}
          imagemAvatar={objeto.one.imagemAvatar}
        />
        <Card
          nomeArtista={objeto.two.nomeArtista}
          imagemPrincipal={objeto.two.imagemPrincipal}
          imagemPqna1={objeto.two.imagemPqna1}
          imagemPqna2={objeto.two.imagemPqna2}
          quantidadeImagens={objeto.two.quantidadeImagens}
          nomePasta={objeto.two.nomePasta}
          imagemAvatar={objeto.two.imagemAvatar}
        />
        <Card
          nomeArtista={objeto.three.nomeArtista}
          imagemPrincipal={objeto.three.imagemPrincipal}
          imagemPqna1={objeto.three.imagemPqna1}
          imagemPqna2={objeto.three.imagemPqna2}
          quantidadeImagens={objeto.three.quantidadeImagens}
          nomePasta={objeto.three.nomePasta}
          imagemAvatar={objeto.three.imagemAvatar}
        />
      </div>
    </section>
  );
}
