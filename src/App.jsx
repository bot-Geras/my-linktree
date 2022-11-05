import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import LinkTree from "./components/Linktree";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LinkTree />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
