import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import blackbox from './blackbox.pdf';
import ml from './ml.png';

function Blackbox() {

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

    const handleClick = (e, link) => {
        console.log(link);
        e.preventDefault();
        document.querySelectorAll('a').forEach((a) => {
            a.style.border = 'none';
        });
        const navigator = document.querySelector('.navigator');
        navigator.style.display = 'block';
        navigator.style.animation = 'expand 1s forwards';
        setTimeout(() => {
            window.location.href = link;
        }, 1000);
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
        document.querySelector('.navigator-open').style.animation = 'shrink 2s forwards';
        setTimeout(() => {
            document.querySelector('nav').style.display = 'flex';
            document.querySelector('nav').style.animation = 'fade-in 2s forwards';
            document.querySelector('.navigator-open').style.display = 'none';
        }, 1000);   
        setTimeout(() => {
            document.querySelector('.content').style.display = 'flex';
            document.querySelector('.content').style.animation = 'fade-in 2s forwards';
        }, 1000);
    }
        );
  return (
    <div className="App">
      <nav>
        <h1 className="name">Writing Portfolio</h1>
        <div className="main-links green">
        <a href="/">Home</a>
        <a onClick={(e)=>handleClick(e, "/research")}>Research Proposal</a>
        <a onClick={(e)=>handleClick(e, "/correspondence")}>Professional Correspondence</a>
        </div>
        <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="options">
            <div className="close" onClick={toggleMenu}>X</div>
            <a href="/">Home</a>
            <a onClick={(e)=>handleClick(e, "/research")}>Research Proposal</a>
            <a onClick={(e)=>handleClick(e, "/correspondence")}>Professional Correspondence</a>
        </div>
      </nav>
      <div className="content">
        <div className="content-small-image">
            <img src={ml} alt="Aakarsh Kaushal" height="400em"/>
        </div>
        <div className="mouse">
            <div className="mouse-body">
                <div className="scroll-wheel"></div>
            </div>
        </div>
        <div className="content-text">
            <h1>Decoding <span style={{color:"#3af274"}}>Machine Learning</span> algorithms</h1>
            <h4>In this essay, I propose a research based on quantitatively analysing and understanding the negative energy distribution within the casimir cavity to use it to manipulate spacetime to further the research in Alcubierre drive and move towards the goal of building it.</h4>
            <a className="view-b" href={blackbox} target="_blank">View</a>
        </div>
        <div className="content-image">
            <img src={ml} alt="Aakarsh Kaushal" height="500em"/>
        </div>
      </div>
      <div className="navigator-open"></div>
      <div className="navigator"></div>
    </div>
  );
}

export default Blackbox;
