import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { PatternSelector } from "./components/patterns/PatternSelector";
import { TextureSelector } from "./components/textures/TextureSelector";
import GradientSelector from "./components/backgrounds/BackgroundSelector";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/gradients" element={<GradientSelector />} />
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<PatternSelector />} />
        <Route path="/textures" element={<TextureSelector />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
