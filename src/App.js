import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Mobile480.css";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProject from "./Component/AllProject";
import Contact from "./Component/Contact";
import Aboutme from "./Component/Aboutme";
import Navbar from "./Component/Navbar";
import HtmlCss from "./Component/HtmlCss";
import JavaScript from "./Component/JavaScript";
import Reactproject from "./Component/Reactproject";
import Cv from "./Component/Cv";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cv" element={<Cv />}></Route>
          <Route path="all" element={<AllProject />}></Route>
          <Route path="aboutme" element={<Aboutme />}></Route>
          <Route path="meni" element={<Navbar />}></Route>
          <Route path="htmlCss" element={<HtmlCss />}></Route>
          <Route path="javaScript" element={<JavaScript />}></Route>
          <Route path="reactpro" element={<Reactproject />}></Route>

          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
