import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { PatternSelector } from "./components/patterns/PatternSelector";
import { TextureSelector } from "./components/textures/TextureSelector";
import GradientSelector from "./components/backgrounds/BackgroundSelector";
import DocsPage from "./pages/DocsPage";
import { ToastContainer, Zoom } from "react-toastify";
import GradientSelector2 from "./components/gradients/GradientSelector";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <Navbar />

      <Routes>
        <Route path="/shades" element={<GradientSelector />} />
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/patterns" element={<PatternSelector />} />
        <Route path="/textures" element={<TextureSelector />} />
        <Route path="/gradients" element={<GradientSelector2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
