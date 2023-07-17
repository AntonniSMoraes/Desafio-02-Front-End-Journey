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
        <a href="/artist-page" className="remove-style"><button className="gif-button"><img src={heroAnimation} className="first-pg-gif" /></button></a>
      </div>
      <div className="organizer-two">
        {/* botão para sign up */}
        <a href="/create-account" className="remove-style"><button className="get-started" href="/CreateAccount">
          <img id="rocket" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch@2x.svg"/>
          <h5 className="get-started-txt">Get Started!</h5>
        </button></a>
        <div className="info-pg">
          <div>
            <h5 className="aditional-value">240k+</h5>
            <p className="aditional-info">Total Sale</p>
          </div>
          <div>
            <h5 className="aditional-value">100k+</h5>
            <p className="aditional-info">Auctions</p>
          </div>
          <div>
            <h5 className="aditional-value">240k+</h5>
            <p className="aditional-info">Artists</p>
          </div>
        </div>
      </div>
    </section>
  );
}
