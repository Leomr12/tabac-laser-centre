import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/centre-anti-tabac-laser/:city" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;