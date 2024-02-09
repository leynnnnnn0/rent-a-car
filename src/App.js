import "./App.css";
import Header from "./Pages/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vehicles from "./Pages/Vehicles/Vehicles";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
        <Route path="/home" element={<Header />} />
        <Route path="/vehicles" element={<Vehicles/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
