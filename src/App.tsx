import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VehiclePage from "./pages/VehiclePage";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
