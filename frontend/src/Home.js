import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import research from './research.pdf';
import programmer from './programmer.png';

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            document.querySelector('.options').style.animation = 'slide-out 0.5s forwards';
            setIsOpen(false);
        } else {
            document.querySelector('.options').style.animation = 'slide-in 0.5s forwards';
            setIsOpen(true);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const contentSmallImage = document.querySelector('.content-small-image');
            const mouse = document.querySelector('.mouse');
            if (!contentSmallImage) return;
    
            let windowHeight = window.innerHeight;
            let scrollY = window.scrollY;
            let fadeStart = 1;
            let fadeEnd = windowHeight / 2;
    
            let opacity = 1;
    
            if (scrollY <= fadeStart) {
                opacity = 1;
            } else if (scrollY > fadeStart && scrollY < fadeEnd) {
                opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
            } else {
                opacity = 0;
            }
    
            contentSmallImage.style.opacity = opacity;
            mouse.style.opacity = opacity;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('nav').style.display = 'flex';
            document.querySelector('nav').style.animation = 'fade-in 5s forwards';
        }, 2000);
        setTimeout(() => {
            document.querySelector('.collider').style.display = 'none';
            document.querySelector('.content').style.display = 'flex';
            document.querySelector('.content').style.animation = 'fade-in 5s forwards';
        }, 3000);
    }
        );
  return (
    <div className="App">
      <nav>
        <h1 className="name">My Portfolio</h1>
        <div className="main-links">
        <a href={research}>Research Proposal</a>
        <a href="">Blackbox</a>
        </div>
        <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="options">
            <div className="close" onClick={toggleMenu}>X</div>
            <a href={research}>Research Proposal</a>
            <a href="">Blackbox</a>
        </div>
      </nav>
      <div className="collider">
        <div className="particle part-1"></div>
        <div className="particle part-2"></div>
      </div>
      <div className="content">
        <div className="content-small-image">
            <img src={programmer} alt="Aakarsh Kaushal" height="400em"/>
        </div>
        <div class="mouse">
            <div class="mouse-body">
                <div class="scroll-wheel"></div>
            </div>
        </div>
        <div className="content-text">
            <h1>Hi, I'm <span className="highlight">Aakarsh Kaushal</span></h1>
            <h3>Welcome to my professional portfolio.</h3>
            <h4>I am a second year <span style={{color:"dodgerblue"}}>CS</span> major at <span style={{color:"red"}}>Northeastern University</span> with a keen interest in Astrophysics. This website features my writings for the ENGW-3302 Advanced Writing in Technical Professions course. You can navigate to these writings using the links in the top-right section of the webpage</h4>
        </div>
        <div className="content-image">
            <img src={programmer} alt="Aakarsh Kaushal" height="500em"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
