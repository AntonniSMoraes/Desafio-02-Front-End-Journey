import "./SectionFive.css";
import Cards from "../commons/NftCard";
import { useState, useEffect } from "react";

export default function SectionFive(props) {
  const [nftGalleryContent, setNftGalleryContent] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Array.isArray(props.nfts) && props.nfts.length >= 3) {
        const updatedNftGalleryContent = [];
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
          updatedNftGalleryContent.push(card);
        }
        setNftGalleryContent(updatedNftGalleryContent);
      }
    }, 200);
  
    return () => clearTimeout(timeoutId);
  }, [props.nfts, props.artists]);

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
