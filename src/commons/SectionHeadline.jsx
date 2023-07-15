import "./SectionHeadline.css";

export default function SectionHeadline(props) {
  return (
    <div className="txtbox">
      <h4 className="title">{props.title}</h4>
      <p className="txt">{props.txt}</p>
    </div>
  );
}
