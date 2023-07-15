import "./ArtistCard.css";

export default function ArtistCard(props) {
  const { id, photo, artist, price } = props;
  return (
    <button className="card">
      <p className="position">{id}</p>
      <img src={photo} className="photo" />
      <div className="artist-info">
        <h5 className="name">{artist}</h5>
        <div className="sales">
          <p className="total">Total Sales</p>
          <p className="price">{price} ETH</p>
        </div>
      </div>
    </button>
  );
}
