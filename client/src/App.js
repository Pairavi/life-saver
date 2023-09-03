import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Navbar
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Ambulance from "./pages/Amblance.jsx";
import Drivers from "./pages/Drivers.jsx";
import Help from "./pages/Help.jsx";
import Logut from "./pages/Logout.jsx";
// Login
import Login from "./pages/Login";
// import Login from "./pages/LoginBoot";

const App = () => {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <Sidebar path="/dashboard">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/logout" element={<Logut />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect, useRef, ReactElement } from "react";
// import ReactDOM from "react-dom";
// import { Wrapper, Status } from "../src";

// function MyMapComponent(center, zoom) {
//   const ref = useRef();

//   useEffect(() => {
//     new window.google.maps.Map(ref.current, {
//       center,
//       zoom,
//     });
//   });

//   return <div ref={ref} id="map" />;
// }

// function App() {
//   const center = { lat: -34.397, lng: 150.644 };
//   const zoom = 4;

//   return (
//     <Wrapper apiKey="" render={render}>
//       <MyMapComponent center={center} zoom={zoom} />
//     </Wrapper>
//   );
// }
