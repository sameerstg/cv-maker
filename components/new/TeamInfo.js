import Danish from "../../components/new/Assets/Danish.jpg";
import Danish2 from "../../components/new/Assets/Danish2.jpg";
import SameerSTG from "../../components/new/Assets/SameerSTG.jpg";
import SameerSTG2 from "../../components/new/Assets/SameerSTG2.jpeg";
import { FaFacebook, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

import "./TeamInfoStyles.css";
import Image from "next/image";

const TeamInfo = () => {
  return (
    <div className="TeamInfo text-black font-bold">
      <h1>Our Team</h1>
      <p>Meet the dedicated creators behind Auto CV Maker.</p>
      <div className="first-member">
        <div className="member-text">
          <h2>Danish Ahmed</h2>
          <h4>FrontEnd Developer</h4>
          <p>
            As the frontend developer of Auto CV Maker, I am committed to
            delivering a smooth and intuitive user experience. By leveraging the
            latest web technologies and design principles, I ensure that our
            platform is both functional and aesthetically pleasing. My goal is
            to make the process of creating a resume as straightforward and
            enjoyable as possible, so you can focus on showcasing your skills
            and achievements.
          </p>
          <h5>Know more about me!</h5>
        </div>
        <div className="Image">
          {/* <Image alt="Img" src={Danish} /> */}
          <Image alt="Img" src={Danish2} />
        </div>
      </div>
      <div className="SocialIcons-1">
        <a
          href="https://github.com/danishahmed65"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/danish-ahmed-b8a508229/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.facebook.com/danish.armani.18"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaFacebook className="icon" />
        </a>
      </div>
      <div className="second-member">
        <div className="member-text">
          <h2>Sameerstg</h2>
          <h4>Game Developer & VR/AR Dev</h4>
          <p>
            Meet our versatile Full Stack Developer, who is also a game
            developer. As a key member of the Auto CV Maker team, he expertly
            manages both front-end and back-end development, ensuring our
            platform is robust and efficient. His dual expertise in web and game
            development brings a unique, creative edge to our project, enhancing
            user experience with innovative solutions. His dedication and skills
            are vital to the success of Auto CV Maker.
          </p>
          <h5>Know more about me!</h5>
        </div>
        <div className="Image">
          {/* <Image alt="Img" src={SameerSTG} /> */}
          <Image alt="Img" src={SameerSTG2} />
        </div>
      </div>
      <div className="SocialIcons-2">
        <a
          href="https://sameerstg.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGlobe className="icon" />
          {/* <FaGithub className="icon" /> */}
        </a>
        <a
          href="https://github.com/sameerstg"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sameerstg/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>{" "}
      <div className="first-member">
        <div className="member-text">
          <h2>Tareeb</h2>
          <h4>FrontEnd Developer</h4>
          <p>
            As the frontend developer of Auto CV Maker, I am committed to
            delivering a smooth and intuitive user experience. By leveraging the
            latest web technologies and design principles, I ensure that our
            platform is both functional and aesthetically pleasing. My goal is
            to make the process of creating a resume as straightforward and
            enjoyable as possible, so you can focus on showcasing your skills
            and achievements.
          </p>
          <h5>Know more about me!</h5>
        </div>
        <div className="Image">
          {/* <Image alt="Img" src={Danish} /> */}
          <Image alt="Img" src={Danish2} />
        </div>
      </div>
      <div className="SocialIcons-1">
        <a
          href="https://github.com/danishahmed65"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/danish-ahmed-b8a508229/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.facebook.com/danish.armani.18"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaFacebook className="icon" />
        </a>
      </div>
      <div className="second-member">
        <div className="member-text">
          <h2>Osama</h2>
          <h4>Python Developer & Web Developer</h4>
          <p>
            Meet our versatile Full Stack Developer, who is also a game
            developer. As a key member of the Auto CV Maker team, he expertly
            manages both front-end and back-end development, ensuring our
            platform is robust and efficient. His dual expertise in web and game
            development brings a unique, creative edge to our project, enhancing
            user experience with innovative solutions. His dedication and skills
            are vital to the success of Auto CV Maker.
          </p>
          <h5>Know more about me!</h5>
        </div>
        <div className="Image">
          {/* <Image alt="Img" src={SameerSTG} /> */}
          <Image alt="Img" src={SameerSTG2} />
        </div>
      </div>
      <div className="SocialIcons-2">
        <a
          href="https://sameerstg.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGlobe className="icon" />
          {/* <FaGithub className="icon" /> */}
        </a>
        <a
          href="https://github.com/sameerstg"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sameerstg/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
};

export default TeamInfo;
