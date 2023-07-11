import React from "react";
import styles from "./nft-page.module.css";
import TimerComponent from "../components/timerComponent/timerComponent";

function NftPage() {
  return (
    <div className={styles.wholepage}>
      <div className={styles.image}>
        <img src="../../public/images/image-place-holder.png" alt="NFT" />
      </div>
      
      <div className={styles.div2}>
        <div>
          <h1>The Orbitians</h1>
          <p><span>Minted On Sep 30, 2022</span></p>
        </div>

        <div>
          <h3>Created By</h3>
        </div>

        <div>
            <img src="../../public/images/avatar-placeholder.png" alt="creator-profile" />
          <h3>Orbitian</h3>
        </div>

        <div>
          <h3>Description</h3>
          <p>
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain, There are all sorts of beings in the NFT Universe. The
            most advanced and friendly of the bunch are Orbitians. They live in
            a metal space machines, high up in the sky and only have one foot on
            Earth. These Orbitians are a peaceful race, but they have been at
            war with a group of invaders for many generations. The invaders are
            called Upside-Downs, because of their inverted bodies that live on
            the ground, yet do not know any other way to be. Upside-Downs
            believe that they will be able to win this war if they could only
            get an eye into Orbitian territory, so they've taken to make human
            beings their target.
          </p>
        </div>
      </div>

      <div className={styles.divTimer}>
        <TimerComponent />
      </div>

    </div>
  );
}

export default NftPage;
