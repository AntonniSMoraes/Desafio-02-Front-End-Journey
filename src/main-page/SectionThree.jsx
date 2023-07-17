import "./SectionThree.css";
import ArtistCard from "../commons/ArtistCard";
import React from "react";

export default function SectionThree({ nfts }) {
  const artistCards = nfts.map((nft) => (
    <a href={"/artists/"+nft.id} className="remove-style">
      <ArtistCard
      id={nft.id}
      photo={nft.artistPhoto}
      artist={nft.artist}
      price={nft.price}/>
      </a>
  ));
  return (
    <section className="pg-three">
      <div className="pg-three-head">
        <div className="txtbox">
          <h4 className="title">Top Creators</h4>
          <p className="txt">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <a href="/rankings" className="remove-style"><button className="ranking-head">
          <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch@2x.svg" />
          <p className="rank-txt">View Rankings</p>
        </button></a>
      </div>
      <div className="artist-buttons">
        {artistCards}
      </div>
      <a href="/rankings" className="remove-style"><button className="ranking">
        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch@2x.svg" />
        <p className="rank-txt">View Rankings</p>
      </button></a>
    </section>
  );
}
