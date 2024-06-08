import Hero from '../../components/new/Hero';
import services from '../../components/new/Assets/services.png';
import ServiceInfo from '../../components/new/ServiceInfo';

function Services() {
    return(
        <>
        <Hero
        cName="hero-about"
        heroImg={services}
        title={
          <span>S<span className="highlight">E</span>RVICES</span>
        }
        btnClass="hide"
        />
        <ServiceInfo />
        </>
    )

}

export default Services;