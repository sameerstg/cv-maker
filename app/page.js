'use client'
import Hero from '../components/new/Hero';
import home from '../components/new/Assets/home.png';
import useTypingEffect from '../components/new/useTypingEffect';
import HomeContent from '../components/new/HomeContent';

function Home() {
//This is for Animated <P> tag Lines Occuring 
  const texts = [
    "Change the way you approach your next Resume search.",
    "Create a Professional resume easily.",
    "Your dream Job is just a click away."
  ];
//This is for Animated <P> tag Lines Occuring 
  const typingText = useTypingEffect(texts, 50, 1500);

  return (
    <div className='text-center'>
      <Hero
        cName="hero"
        heroImg={home}
        title={
          <span>
            Free Online
            <span className="highlight"> Resume</span> Builder.
          </span>
        }
        text={
          <span>
            {typingText.split(' ').map((word, index) => (
              word === 'Resume' || word === 'Professional' || word === 'Job'
                ? <span key={index} className="highlight">{word} </span>
                : <span key={index}>{word} </span>
            ))}
          </span>
        }
        buttonText="Create Your Resume Now"
        url="/create/" 
        btnClass="Show"
      />
      <marquee><h3>Website Under Development</h3></marquee>
      <HomeContent />
      
    </div>
  );
}

export default Home;
