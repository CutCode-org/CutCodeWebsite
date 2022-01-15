import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Download from "./Pages/Download";
import Contact from "./Pages/Contact";
import _404Page from "./Pages/404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<_404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
