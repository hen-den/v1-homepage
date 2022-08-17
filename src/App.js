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
import Xing from './img/social/xing.png'
import {TopBottom} from "./components/top-bottom";
import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import business_img from './img/profile/business.png';
import {CardOverview} from "./components/card-overview";

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
      window.sr.reveal('.card-overview', { viewFactor: 0.1 });
      window.sr.reveal('.experience', { viewFactor: 0.2 });
      window.sr.reveal('.featured-projects', { viewFactor: 0.1 });
      window.sr.reveal('.other-projects', { viewFactor: 0.1 });

      }
  )

  return (
    <div className="App">
      <div id="site">
        <Switch />
        <Intro image={{img_url: business_img}}/>
        <Background />

        <CardOverview topics={[{
            headline: "Consulting",
            name: "Business Analysis",
            description: "Technical analysis and coordination of brandspecific software requirements in enterprise organizations"
        },{
            headline: "Full Stack Developer",
            name: "Scalable Web Apps",
            description: "Development of software solutions for customer projects"
        },{
            headline: "Data Engineering",
            name: "Building Data Pipelines",
            description: "Query and organize raw data from data lakes and data warehouses. " +
                "Perform data transformation processes and develop analytical visualizations."
        },{
            headline: "Data Science",
            name: "Creation of ML Classifiers",
            description: "Design and implementation of optimized classifiers based on previously " +
                "identified data features and characteristics."
        }

        ]}/>

        <Skills languages={["JavaScript", "Python", "Java", "SQL", "HTML", "CSS"]}
                frameworks={["React", "Django", "Django-REST", "Flask", "Spring Boot"]}
                tools={["Bash", "Git & Github", "Postman", "Jupyter Notebooks", "Apache HUE SQL Editor"]}
                data_transformation={["Apache Spark", "PySpark", "Scikit-Learn", "Keras", "Pandas", "Numpy", "Matplotlib", "SciPy"]} />

        <Experience experience={[{
              company: "MHP - A Porsche Company",
              url: "https://www.mhp.com/en/",
              time: "Jan 2022 - Present",
              position: "Consultant & Web-Developer"
        }, {
              company: "Robert Bosch GmbH",
              url: "https://www.bosch.com/",
              time: "Mar 2020 - Dec 2021",
              position: "Software Engineer & Data Scientist"
          }]} />

         <OtherProjects
             projects={[{
                 name: "Bachelor's Thesis -  Traffic Sign Localization",
                 url: "https://github.com/hen-den",
                 description: "Prototypical design and implementation of a web service for the localization of specific traffic signs.\n \n" + "Grade: 1.0\n\n"+"• Detailed analysis of geographic OpenStreetMap data \n" +
                     "• Determination of recurring enviromental features & characteristics\n" +
                     "• Creation of machine learning classifiers for the detection of specific traffic signs \n" +
                     "• Optimized route planning based on environmental characteristics & provision of detailed geographic feature overviews",
                 used: ["React JS", "Python Django-REST", "PostGIS","HTML", "CSS"]
             },{
                 name: "Webapplication for Endurance Run Planning",
                 url: "https://www.bosch.com/",
                 description: "Applicationdesign, softwaredesign and development of a webapplication for planning validation routes for driver assistance systems",
                 used: ["Django", "JavaScript", "MySQL", "LeafletJS", "D3-JS", "Apache Hadoop","HTML", "CSS"]
             },{
                 name: "Public Transport Transparency Register",
                 url: "https://www.oepnv-transparenzregister.de/",
                 description: "Webapplication to display services and costs in public bus transport",
                 used: ["Python Flask", "JavaScript", "SQLite","HTML", "CSS"]
             }]}

         />


          <Footer links={[{
              title: "LinkedIn",
              img_url: LinkedIn,
              url: "https://www.linkedin.com/in/mertkan-henden/",
          },{
              title: "Xing",
              img_url: Xing,
              url: "https://www.xing.com/profile/Mertkan_Henden/",
          },{
              title: "Github",
              img_url: Github,
              url: "https://github.com/hen-den",
          }]}/>

          <TopBottom />

      </div>
    </div>
  );
}

export default App;
