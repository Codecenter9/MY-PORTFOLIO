import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout"; // Has Home + About + etc.
import AboutMe from "./components/aboutme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/details" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
