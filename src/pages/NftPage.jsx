import React from "react";
import TimerComponent from "../commons/TimerComponent";
import firstImage from "../res/image-place-holder.png";
import avatarImage from "../res/avatar-placeholder.png";
import globeImage from "../res/globe.png";
import arrowImage from "../res/arrow-right.png";
import "./NftPage.css";
import Nft_Card from "../commons/NftCard";

function NftPage(props) {
  const handleDivClick = () => {
    window.location.href =
      "https://nft-market-place.animaapp.io/artist-page-desktop";
  };

  const handleDivCLick2 = () => {
    window.location.href =
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples";
  };

  return (
    <div className="wholepage">
      <div className="divImage">
        <img src={firstImage} alt="NFT" />
      </div>
      <div className="divTexts">
        <div className="divTitle">
          <h1>The Orbitians</h1>
          <p>
            <span>Minted On Sep 30, 2022</span>
          </p>
        </div>

        <div className="divCreated">
          <div className="createdBy">
            <h3>Created By</h3>
          </div>
          <div className="profile" onClick={handleDivClick}>
            <img className="avatarImage" src={avatarImage} alt="Avatar" />
            <h3>Orbitian</h3>
          </div>
        </div>

        <div className="divDescription">
          <h3>Description</h3>
          <p>
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
        <div className="divNfts">
            {props.map((nftCard) => (
                <Nft_Card 
                title={nftCard.name} 
                image={nftCard.image} 
                artist={nftCard.artist}
                artistPhoto={nftCard.artistPhoto} 
                price={nftCard.price} 
                highestBid={nftCard.highestBid} 
                />
            ))}
        </div>
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
