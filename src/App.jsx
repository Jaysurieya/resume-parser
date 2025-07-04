import { SparklesPreview } from "./components/SparklesPreview";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import "./App.css";

function App() {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ];
  return (
    <div >
      <div style={{paddingTop: "5px",paddingBottom:"40px"}}>
      <GooeyNav items={navItems}/> 
      </div>
      <SparklesPreview />
    </div>
  );
}

export default App;

