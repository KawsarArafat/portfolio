import Options from'./components/options'
import Info from'./components/myInfo'
import PersonalInfo from'./components/personalInfo'
import Skills from'./components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import './App.css';


function App() {
  return (
    <div className='body_'>
      <div><Options/></div>
      <div className="infocss">
        <div id="home">
          <Info/>
        </div>
        <div id="about">
          <PersonalInfo />
        </div>
        <div id="skills">
          <Skills />
          </div>
        <div id="projects">
          <Projects />
          </div>
        <div id="contact">
          <Contact />
          </div>
      </div>
    </div>
  );
}

export default App;
