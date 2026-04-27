import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import AboutMe from "./components/aboutme";
import PortfolioDetail from "./components/portfolioDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/details" element={<AboutMe />} />
        <Route path="/project/:id" element={<PortfolioDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
