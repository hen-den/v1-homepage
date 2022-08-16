import './_scss/main.scss';
import {Switch} from './components/switch';
import {Intro} from './components/intro';
import {Background} from './components/background';
import {Skills} from './components/skills';
import {Experience} from './components/experience';
import {FeaturedProjects} from "./components/featured-projects";
import Blistabloc from './img/featured/blistabloc/blistabloc.png';
import {OtherProjects} from "./components/other-projects";
import {Footer} from "./components/footer";
import Github from './img/social/github.svg';
import LinkedIn from './img/social/linkedin.svg';
import {TopBottom} from "./components/top-bottom";
import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";


function App() {

  useEffect(() => {
      // Light & Dark mode
      const d = new Date();
      const hours = d.getHours();
      const night = hours >= 19 || hours <= 7; // between 7pm and 7am
      const body = document.querySelector('body');
      const input = document.getElementById('switch');

      if (night) {
          input.checked = true;
          body.classList.add('night');
      }

      // Waving Hand
      const hand = document.querySelector('.emoji.wave-hand');

      function waveOnLoad() {
          hand.classList.add('wave');
          setTimeout(function() {
              hand.classList.remove('wave');
          }, 2000);
      }

      setTimeout(function() {
          waveOnLoad();
      }, 1000);

      hand.addEventListener('mouseover', function() {
          hand.classList.add('wave');
      });

      hand.addEventListener('mouseout', function() {
          hand.classList.remove('wave');
      });

      // Scroll reveal
      window.sr = ScrollReveal({
          reset: false,
          duration: 600,
          easing: 'cubic-bezier(.694,0,.335,1)',
          scale: 1,
          viewFactor: 0.3,
      });

      window.sr.reveal('.background');
      window.sr.reveal('.skills');
      window.sr.reveal('.experience', { viewFactor: 0.2 });
      window.sr.reveal('.featured-projects', { viewFactor: 0.1 });
      window.sr.reveal('.other-projects', { viewFactor: 0.05 });
      }
  )

  return (
    <div className="App">
      <div id="site">
        <Switch />
        <Intro />
        <Background />
        <Skills languages={["deutsch", "deutsch", "deutsch"]}
                frameworks={["deutsch", "deutsch", "deutsch"]}
                tools={["deutsch", "deutsch", "deutsch"]}
                design={["deutsch", "deutsch", "deutsch"]} />

        <Experience experience={[{
              company: "Apple Music",
              url: "https://www.apple.com/music/",
              time: "Jan - June 2018",
              position: "Developer"
        }, {
              company: "Apple Music",
              url: "https://www.apple.com/music/",
              time: "Jan - June 2018",
              position: "Developer"
          }]} />

          <FeaturedProjects projects={[{
              name: "Apple",
              img_url: Blistabloc,
              url: "https://www.apple.com/music/",
              description: "sdfsdfksdhfkjsdh skdjhfkjsd kjshdkjfhs hksjdhfkjsh kjshkj hk",
          },{
              name: "Apple",
              img_url: Blistabloc,
              url: "https://www.apple.com/music/",
              description: "sdfsdfksdhfkjsdh skdjhfkjsd kjshdkjfhs hksjdhfkjsh kjshkj hk",
          },{
              name: "Apple",
              img_url: Blistabloc,
              url: "https://www.apple.com/music/",
              description: "sdfsdfksdhfkjsdh skdjhfkjsd kjshdkjfhs hksjdhfkjsh kjshkj hk",
          },
          ]} />

         <OtherProjects
             projects={[{
                 name: "Other Project",
                 url: "https://www.apple.com/music/",
                 description: "sdfsdfksdhfkjsdh skdjhfkjsd kjshdkjfhs hksjdhfkjsh kjshkj hk",
                 used: ["HTML", "CSS", "React", "Django-REST"]
             },{
                 name: "Other Project",
                 url: "https://www.apple.com/music/",
                 description: "sdfsdfksdhfkjsdh skdjhfkjsd kjshdkjfhs hksjdhfkjsh kjshkj hk",
                 used: ["HTML", "CSS", "React", "Django-REST"]
             },{
                 name: "Other Project",
                 url: "https://www.apple.com/music/",
                 description: "sdfsdfksdhfkjsdh skdjhfkjsd kjshdkjfhs hksjdhfkjsh kjshkj hk",
                 used: ["HTML", "CSS", "React", "Django-REST"]
             }]}

         />

          <Footer links={[{
              title: "LinkedIn",
              img_url: LinkedIn,
              url: "https://www.apple.com/music/",
          },{
              title: "Xing",
              img_url: Github,
              url: "https://www.apple.com/music/",
          },{
              title: "Github",
              img_url: Github,
              url: "https://www.apple.com/music/",
          }]}/>

          <TopBottom />

      </div>
    </div>
  );
}

export default App;
