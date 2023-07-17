import "./SectionFour.css";
import CategoriesCard from "../commons/CategoriesCard";

export default function SectionFour() {
  return (
    <section className="pg-four">
      <h4 className="pg-four-title">Browse Categories</h4>
      <div className="pg-four-cards">
        <CategoriesCard title={"Art"}
          imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/paintbrush-1@2x.svg"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-44@2x.png"}
        />
        <CategoriesCard title={"Collectibles"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-45@2x.png"}
          imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/swatches@2x.svg"}
        />
        <CategoriesCard title={"Music"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-46@2x.png"}
            imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/musicnotes@2x.svg"}
        />
        <CategoriesCard title={"Photography"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-47@2x.png"}
            imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/camera@2x.svg"}
        />
        <CategoriesCard title={"Video"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-48@2x.png"}
            imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/videocamera@2x.svg"}
        />
        <CategoriesCard title={"Utility"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-49@2x.png"}
            imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magicwand@2x.svg"}
        />
        <CategoriesCard title={"Sport"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-50@2x.png"}
            imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/basketball@2x.svg"}
        />
        <CategoriesCard title={"Virtual Worlds"}
          imgBg={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-51@2x.png"}
            imgFront={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/planet@2x.svg"}
        />
      </div>
    </section>
  );
}