import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
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
            if (!contentSmallImage) return;
    
            let windowHeight = window.innerHeight;
            let scrollY = window.scrollY;
    
            // Adjust these values based on your preferences
            let fadeStart = 1; // Start fade at 100px scroll
            let fadeEnd = windowHeight / 2; // End fade at half the window height
    
            let opacity = 1;
    
            if (scrollY <= fadeStart) {
                opacity = 1;
            } else if (scrollY > fadeStart && scrollY < fadeEnd) {
                opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
            } else {
                opacity = 0;
            }
    
            contentSmallImage.style.opacity = opacity;
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
            if (window.innerWidth < 800) {
                document.querySelector('.content-small-image').style.animation = 'fade-in 5s forwards';
            }
        }, 3000);
    }
        );
  return (
    <div className="App">
      <nav>
        <h1 className="name">My Portfolio</h1>
        <div className="main-links">
        <a href="">Research Proposal</a>
        <a href="">Blackbox</a>
        </div>
        <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="options">
            <div className="close" onClick={toggleMenu}>X</div>
            <a href="">Research Proposal</a>
            <a href="">Blackbox</a>
        </div>
      </nav>
      <div className="collider">
        <div className="particle part-1"></div>
        <div className="particle part-2"></div>
      </div>
      <div className="content">
        <div className="content-small-image">
            <img src={programmer} alt="Aakarsh Kaushal" height="500em"/>
        </div>
        <div className="content-text">
            <h1>Hi, I'm <span className="highlight">Aakarsh Kaushal</span></h1>
            <h3>CS Major @ NEU with a keen interest in Astrophysics</h3>
        </div>
        <div className="content-image">
            <img src={programmer} alt="Aakarsh Kaushal" height="500em"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
