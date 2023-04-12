import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reactrouter/src/components/Contact"
          element={<Contact />}
        />
        <Route path="/reactrouter/src/components/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
