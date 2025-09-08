import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Agences from "./pages/Agences.jsx";
import NavBar from "./components/navigation/NavBar.jsx";
import FullScreenNav from "./components/navigation/FullScreenNav.jsx";

const App = () => {
  return (
    <div>
      <FullScreenNav />
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agences" element={<Agences />} />
      </Routes> */}
    </div>
  );
};

export default App;
