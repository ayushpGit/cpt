import "./App.css";
import develop from "./assets/images/development.jpg";
import design from "./assets/images/design.jpg";
import market from "./assets/images/marketing.jpg";
function App() {
  return (
    <div className="App">
      <div className="home-development">
        <p id="home-animate-text1">Development</p>
        <div className="home-img-wrap">
          <img className="home-img develop" src={develop} alt="develop"></img>
        </div>
      </div>
      <div className="home-designing">
        <p id="home-animate-text2">Designing</p>
        <img className="home-img design" src={design} alt="design"></img>
      </div>
      <div className="home-marketing">
        <p id="home-animate-text3">Marketing</p>
        <img className="home-img market" src={market} alt="market"></img>
      </div>
      <div id="overlay"></div>
    </div>
  );
}

export default App;
