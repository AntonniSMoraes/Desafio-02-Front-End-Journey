import "./SectionEight.css";

export default function SectionEight() {
  return (
    <section className="pg-eight">
      <div className="pg-eight-subs">
        <img
          className="last-img"
          src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/photo-1@2x.png"
        />
        <div className="input-box">
          <div className="pg-eight-txtbox">
            <h4 className="pg-eight-title">Join Our Weeckly Digest</h4>
            <p className="pg-eight-txt">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>
          <div className="pg-eight-subscribe-input">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="pg-eight-input"
            ></input>
            <button className="pg-eight-button">
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/envelopesimple-1@2x.svg" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
