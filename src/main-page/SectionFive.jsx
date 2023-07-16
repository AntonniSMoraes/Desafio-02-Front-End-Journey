import "./SectionFive.css";
import Cards from "../commons/NftCard";
export default function SectionFive(props) {
  let nftGalleryContent = new Array();
  for (let i = 0; i < 3; i++) {
    let nftCard = props.nfts[i];
    let artistPhotoObj = props.artists.find(
      (element) => element.name === nftCard.artist
    );
    let card = (
      <Cards
        title={nftCard.name}
        image={nftCard.image}
        artist={nftCard.artist}
        artistPhoto={artistPhotoObj.photo}
        price={nftCard.price}
        highestBid={nftCard.highestBid}
      />
    );
    nftGalleryContent.push(card);
  }
  return (
    <section className="pg-five">
      <div className="pg-fic">
        <div className="pg-five-box">
          <h4 className="pg-five-title">Discover More NFTs</h4>
          <p className="pg-five-txt">Explore new trending NFTs</p>
        </div>
        <button className="see-all-one">
          <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" />
          <p className="see-all-txt">See All</p>
        </button>
      </div>
      <div className="pg-five-cards">{nftGalleryContent}</div>
      <button className="see-all-two">
        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" />
        <p className="see-all-txt">See All</p>
      </button>
    </section>
  );
}
