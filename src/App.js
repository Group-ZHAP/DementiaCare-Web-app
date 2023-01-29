import "./App.css";
import Navbar from "./Navbar";

import { Home } from "./pages/Home";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import About from "./pages/About";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";
import Dementiatalk from "./pages/Dementiatalk";
import ProtectedRoute from "./Auth/Protected";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Dementiatalk" element={<ProtectedRoute />}>
          {" "}
          <Route exact path="/Dementiatalk" element={<Dementiatalk />} />
        </Route>

        <Route exact path="/Register" element={<Registration />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
