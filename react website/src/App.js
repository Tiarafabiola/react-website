import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AllAboutMe from "./components/AllAboutMe";
import "../src/App.css"
import Services from "./components/Services";
import Lifestyle from "./components/Lifestyle";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AllAboutMe />
      <Services />
      <Lifestyle />
    </div>
  );
}

export default App;
