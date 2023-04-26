import "./App.css";
import { CV } from "./CV/CV";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";

const { hero, education, experience, habilities, volunteer } = CV;

function App() {
  const [showComponents, setShowComponents] = useState({
    education: false,
    experience: false,
    about: false,
    more: false
  });

const selectComponent = (componentName) => {
  setShowComponents((prevState) => {
    const newState = {};
    Object.keys(prevState).forEach((key) => {
      newState[key] = false;
    });
    newState[componentName] = true;
    return newState;
  });
};


  return (
    <div className="App">
      <Hero hero={hero} />
      {/* <About hero={hero.aboutMe} /> */}
      {/* <Education education={education} />
      <Experience experience={experience} /> */}
      {/* <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      /> */}
      <div>
      <button className="custom-btn btn-4" onClick={() => selectComponent("education")}> Education </button>
      <button className="custom-btn btn-4" onClick={() => selectComponent("experience")}> Experience </button>
      <button className="custom-btn btn-4" onClick={() => selectComponent("about")}> About </button>
      <button className="custom-btn btn-4" onClick={() => selectComponent("more")}> More </button>
  
      {showComponents.education && <Education education={education} />}
      {showComponents.experience && <Experience experience={experience} />}
      {showComponents.about && <About hero={hero.aboutMe} />}
      {showComponents.more && <More habilities={habilities} volunteer={volunteer} />}
      </div>
      </div>
  );
}

export default App;
