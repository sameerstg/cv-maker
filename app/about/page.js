import Hero from "../../components/new/Hero";
import about from "../../components/new/Assets/about.png";
import TeamInfo from "../../components/new/TeamInfo";

function About() {
  return (
    <>
      <Hero
        cName="hero-about"
        heroImg={about}
        title={
          <span>
            A<span className="highlight">B</span>OUT{" "}
            <span className="highlight">U</span>S
          </span>
        }
        btnClass="hide"
      />{" "}
      <TeamInfo />
    </>
  );
}

export default About;
