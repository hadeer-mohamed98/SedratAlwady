import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import heroImg from "../../assets/HomeSlider/maket3D.webp";


export default function Projects() {
  const pageTitle = "Our Projects";

  return (
    <>
      <ScrollToTopButton />
      <BasicHero title={pageTitle} heroImg={heroImg}/>
      <div>PreviousWorks</div>
    </>
  );
}
