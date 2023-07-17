import "./Main.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";

export default function Main(props) {
  return (
    <body className="scroll">
      <SectionOne />
      <SectionTwo />
      <SectionThree nfts={props.nfts}/>
      <SectionFour />
      <SectionFive nfts={props.nfts}/>
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </body>
  );
}
