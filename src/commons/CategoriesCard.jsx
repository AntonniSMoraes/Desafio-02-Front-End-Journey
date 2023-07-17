import "./CategoriesCard.css";

export default function CategoriesCard({ title, imgFront, imgBg }) {
  return (
    <a href="/marketplace" className="remove-style"><button className="categories-cards">
      <div className="org-images">
        <img className="bg-image" src={imgBg} />
        <div className="bg-filter">
          <img className="center-icon" src={imgFront} />
        </div>
      </div>
      <div className="name-box">
        <h4 className="name-card">{title}</h4>
      </div>
    </button></a>
  );
}
