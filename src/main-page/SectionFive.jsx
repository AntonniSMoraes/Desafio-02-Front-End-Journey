import "./SectionFive.css";
import NftCard from "../commons/NftCard";

export default function SectionFive(props) {
  const nftGalleryContent = props.nfts.slice(0, 3).map((nftCard) => (
      <NftCard
        key={nftCard.id}
        id={nftCard.id}
        title={nftCard.name}
        image={nftCard.image}
        artist={nftCard.artist}
        artistPhoto={nftCard.artistPhoto}
        price={nftCard.price}
        highestBid={nftCard.highestBid}
        bgColor="lightGray"
      />
  ));

  return (
    <section className="pg-five">
      <div className="pg-five-head">
        <div className="pg-five-box">
          <h4 className="pg-five-title">Discover More NFTs</h4>
          <p className="pg-five-txt">Explore new trending NFTs</p>
        </div>
        <a href="/marketplace" className="remove-style">
          <button className="see-all-one">
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" />
            <p className="see-all-txt">See All</p>
          </button>
        </a>
      </div>
      <section className="main_pg_nft_gallery">
        <div className="main_pg_nft_gallery_container">{nftGalleryContent}</div>
      </section>
      <a href="/marketplace" className="remove-style">
        <button className="see-all-two">
          <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" />
          <p className="see-all-txt">See All</p>
        </button>
      </a>
    </section>
  );
}