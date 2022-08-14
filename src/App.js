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
import {TopBottom} from "./components/top-bottom";


function App() {
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
              img_url: Github,
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
