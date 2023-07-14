import "./SectionOne.css";
import heroAnimation from "../res/heroanimation.gif";

export default function SectionOne() {
  return (
    <section className="first-pg">
      <div className="organizer">
        <div className="first-pg-txt">
          <h1 className="title">Discover Digital Art & Collect Nfts</h1>
          <p id="text">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        {/* botão para artist page */}
        <button className="gif-button"><img src={heroAnimation} className="first-pg-gif" /></button>
      </div>
      <div className="organizer-two">
        {/* botão para sign up */}
        <button className="get-started">
          <img
            id="rocket"
            src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch@2x.svg"
          />
          Get Started!
        </button>
        <div className="info-pg">
          <div>
            <p id="aditional-value">240k+</p>
            <p id="aditional-info">Total Sale</p>
          </div>
          <div>
            <p id="aditional-value">100k+</p>
            <p id="aditional-info">Auctions</p>
          </div>
          <div>
            <p id="aditional-value">240k+</p>
            <p id="aditional-info">Artists</p>
          </div>
        </div>
      </div>
    </section>
  );
}
