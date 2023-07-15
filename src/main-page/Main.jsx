import "./Main.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

export default function Main({artists, nfts}) {
  return (
    <body className="scroll">
      <SectionOne />
      <SectionTwo />
      <SectionThree artists = {artists} nfts={nfts}/>
      <SectionFour />
    </body>
  );
}
