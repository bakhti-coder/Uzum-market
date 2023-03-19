import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import { AuthContext } from "../src/components/context/AuthContext";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
