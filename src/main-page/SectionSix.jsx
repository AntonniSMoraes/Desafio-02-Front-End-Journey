import "./SectionSix.css";

export default function SectionSix() {
  return (
    <section className="pg-six">
      <div className="pg-six-org-images">
        <img
          className="pg-six-img"
          src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/screen-tablet@1x.png"
        />
        <div className="pg-six-bg-filter"></div>
      </div>
      <div className="pg-six-front">
        <div className="pg-six-align-front">
          <div className="align-pg-six-card">
            <a className="pg-six-artist-card" href="/">
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png" />
              <p className="pg-six-artist-pg-txt">Shroomie</p>
            </a>
          </div>
          <div className="pg-six-title-box">
            <h3>Magic Mashrooms</h3>
          </div>
          <button className="see-nft-first">
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye-5@2x.svg" />
            <p className="see-nft-txt">See NFT</p>
          </button>
        </div>
        <div className="pg-six-timer-box">
          <p className="timer-txt-one">Auction ends in:</p>
          <div className="pg-six-clock">
            <h3 className="timer-h3">59</h3>
            <h3 className="timer-h3">:</h3>
            <h3 className="timer-h3">59</h3>
            <h3 className="timer-h3">:</h3>
            <h3 className="timer-h3">59</h3>
          </div>
          <div className="pg-six-clock-moregap">
            <p className="timer-txt-one">Hours</p>
            <p className="timer-txt-one">Minutes</p>
            <p className="timer-txt-one">Seconds</p>
          </div>
        </div>
        <div>
          <button className="see-nft">
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye-5@2x.svg" />
            <p className="see-nft-txt">See NFT</p>
          </button>
        </div>
      </div>
    </section>
  );
}
