import "./Main.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";

export default function Main({artists, nfts}) {
  return (
    <body className="scroll">
      <SectionOne />
      <SectionTwo />
      <SectionThree artists = {artists} nfts={nfts}/>
      <SectionFour />
      <SectionFive artists = {artists} nfts={nfts}/>
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </body>
  );
}
