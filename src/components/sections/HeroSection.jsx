'use client'
import ImageWidget from "../widgets/ImageWidget";
import Building from "../../../public/images/1.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section full-container">
      <div className="hero-content">
        <h1>Structural Precision</h1>
        <p>Achieving flawless designs withmeticulous attention to detail.</p>
        <ImageWidget src={Building} width={1800} height={600} layout="intrinsic" alt="_"/>
       </div>
    </section>
  );
};
export default HeroSection;