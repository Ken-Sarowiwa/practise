import './App.css';
import profile from "./components/profile.jsx";
import About from "./components/About.jsx";
import Interests from "./components/Interests.jsx";
import footer from "./components/footer.jsx";
function App() {
  return (
    <div className="App">
      <profile />
      <About/>
      <Interests />
      <footer/>
    </div>
  );
}

export default App;
