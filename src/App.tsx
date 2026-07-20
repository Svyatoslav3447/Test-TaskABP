import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VehiclePage from "./pages/VehiclePage";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
