import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
      <div style={{backgroundColor: "#101010"}}>
        <div style={{ height: "100vh", overflow: "hidden" }}>
          <Navbar />
          <Home />
        </div>
        <div style={{ border: "1px solid red", width: "100%", height: "100vh" }}>
          <About />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
    </>
  );
}

export default App;
