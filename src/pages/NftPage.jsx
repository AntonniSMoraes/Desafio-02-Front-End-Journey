import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import TimerComponent from "../commons/TimerComponent";
import globeImage from "../res/globe.png";
import arrowImage from "../res/arrow-right.png";
import "./NftPage.css";
import NftCard from "../commons/NftCard";

function NftPage(props) {
  const handleDivClick = () => {
    window.location.href =
      "https://nft-market-place.animaapp.io/artist-page-desktop";
  };

  const handleDivCLick2 = () => {
    window.location.href =
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples";
  };

  // Busca a informação acerca da obra específica na API
  const { slug } = useParams();
  const URI = `https://nftdatabase-703d2-default-rtdb.firebaseio.com/data/nfts.json?orderBy="id"&equalTo=${slug}`;
  const [payload, setPayload] = useState({});

  useEffect(() => {
      fetch(URI)
         .then(res => res.json())
         .then(data => setPayload(data[slug - 1]))
         .catch(err => console.log(err.message));
   }, [payload, slug, URI]);

  // Busca trabalhos correlatos do artista para exibir em "More from the artist"
  const moreFromTheArtist = props.nfts.filter(nft => nft.artist === payload.artist);
  console.log(moreFromTheArtist);
  const nftGalleryContent = moreFromTheArtist.map(nftCard =>
    <NftCard key={nftCard.id}
                title={nftCard.name} 
                image={nftCard.image} 
                artist={nftCard.artist}
                artistPhoto={nftCard.artistPhoto} 
                price={nftCard.price} 
                highestBid={nftCard.highestBid}
                bgColor='lightGray' />  
  );

  // Processa a data de criação do NFT a partir API para o formato do modelo
  const date = new Date(payload.createdAt);
  const stringDate = `${date.toLocaleString('default', {month: 'long',})} ${date.getDay()}, ${date.getFullYear()}`;

  return (
    <div className="wholepage">
      <div className="divImage">
        <img src={payload.image} alt="NFT" />
      </div>
      <div className="divTexts">
        <div className="divTitle">
          <h1>{payload.name}</h1>
          <p>
            <span>Minted On {stringDate}</span>
          </p>
        </div>

        <div className="divCreated">
          <div className="createdBy">
            <h3>Created By</h3>
          </div>
          <div className="profile" onClick={handleDivClick}>
            <img className="avatarImage" src={payload.artistPhoto} alt="Avatar" />
            <h3>{payload.artist}</h3>
          </div>
        </div>

        <div className="divDescription">
          <h3>Description</h3>
          <p>
            {`[${payload.description}]: `}
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain,
            <br />
            <br />
            There are all sorts of beings in the NFT Universe. The most advanced
            and friendly of the bunch are Orbitians.
            <br />
            <br />
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth.
            <br /> These Orbitians are a peaceful race, but they have been at
            war with a group of invaders for many generations. <br />
            The invaders are called Upside-Downs, because of their inverted
            bodies that live on the ground, yet do not know any other way to be.
            Upside-Downs believe that they will be able to win this war if they
            could only get an eye into Orbitian territory, so they've taken to
            make human beings their target.
          </p>
        </div>
        <div className="divDetails">
          <div className="divTitleDetails">
            <h3>Details</h3>
          </div>
          <div className="divDetailsText1" onClick={handleDivCLick2}>
            <img className="globeImage" src={globeImage} alt="Globe" />
            <h3>View on Etherscan</h3>
          </div>
          <div className="divDetailsText2" onClick={handleDivCLick2}>
            <img className="globeImage" src={globeImage} alt="Globe" />
            <h3>View Original</h3>
          </div>
        </div>
        <div className="divTags">
          <div className="divTitleTags">
            <h3>Tags</h3>
          </div>
          <div className="divTagsText">
            <h3>Animation</h3>
            <h3>Illustration</h3>
            <h3>Moon</h3>
            <h3>Moon</h3>
          </div>
        </div>
      </div>
      <div className="divCards">
        <div className="divArtistText"></div>
        <div className="divContent">
          <h3>More From This Artist</h3>
          <div className="divButton">
            <button className="buttonArtist">
              {" "}
              <img className="arrowImage" src={arrowImage} alt="Arrow" /> Go To
              Artist Page
            </button>
          </div>
        </div>
        <div className="divNfts">{nftGalleryContent}</div>
      </div>

      <div className="divTimer">
        <TimerComponent
          auctionEndsIn="59 : 59 : 59"
          firstText="Auction Ends In:"
          textButton="Place a Bid"
        />
      </div>
    </div>
  );
}

export default NftPage;