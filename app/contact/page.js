import Hero from '../../components/new/Hero';
import contact from '../../components/new/Assets/contact.png';
import ContactForm from '../../components/new/ContactForm';
import Footer from "../../components/new/Footer"
import Copyright from "../../components/new/Copyright"


function Contact() {
    return(
        <>
        <Hero
        cName="hero-about"
        heroImg={contact}
        title={
          <span>C<span className="highlight">O</span>NTACT</span>
        }
        btnClass="hide"
      />
      <ContactForm />
    </>
    )

}

export default Contact;