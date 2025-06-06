// import './index.css'
import './app.css';
import Header from './Components/HeaderSection/Header';
import Hero from './Components/HeroSection/Hero';
import Companies from './Components/CompanySection/Companies';
import Residencies from './Components/ResidenciesSection/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetInTouch from './Components/GetInTouch/GetStart'
function App() {
  return (
    <div className="App">
      <div>
       <div className='white-gradient'/>
      <Header />
      <Hero/>
      </div>
      <Companies/>
      <Residencies />
      <Value />
      <Contact />
      <GetInTouch />
    </div>
  );
}

export default App;
