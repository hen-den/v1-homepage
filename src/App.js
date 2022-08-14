import './_scss/main.scss';
import {Switch} from './components/switch';
import {Intro} from './components/intro';
import {Background} from './components/background';
import {Skills} from './components/skills';
import {Experience} from './components/experience';
import {FeaturedProjects} from "./components/featured-projects";
import Blistabloc from './img/featured/blistabloc/blistabloc.png';

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

      </div>
    </div>
  );
}

export default App;
