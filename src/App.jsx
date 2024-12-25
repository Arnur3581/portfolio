import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Works } from "./pages/Works/Works";
import { Contact } from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export { App };
