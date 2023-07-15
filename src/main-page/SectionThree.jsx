import "./SectionThree.css";
import ArtistCard from "../commons/ArtistCard";
import React from "react";

export default function SectionThree({ artists, nfts }) {
  return (
    <section className="pg-three">
      <div className="pg-three-head">
        <div className="txtbox">
          <h4 className="title">Top Creators</h4>
          <p className="txt">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <button className="ranking-head">
          <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch@2x.svg" />
          <p className="rank-txt">View Rankings</p>
        </button>
      </div>
      <div className="artist-buttons">
        {artists.map((artist) => (
          <ArtistCard
            id={artist.id}
            photo={artist.photo}
            artist={artist.name}
            price={artist.totalSales}
          />
        ))}
      </div>
      <button className="ranking">
        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch@2x.svg" />
        <p className="rank-txt">View Rankings</p>
      </button>
    </section>
  );
}
