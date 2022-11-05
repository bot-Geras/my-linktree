import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact"
import LinkTree from "./pages/Linktree";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LinkTree />} />
            

          <Route path="/contact" element={ <Contact />} />
           

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
