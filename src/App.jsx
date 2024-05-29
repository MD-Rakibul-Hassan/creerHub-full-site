import { useEffect, useRef } from "react";
import Navbar from "./pages/navbar/Navbar"
import { Outlet, } from "react-router-dom"
import "animate.css";
import Footer from "./pages/footer/Footer";

function App() {

  return (
		<>
			<Navbar />
		  <Outlet />
		  <Footer />
		</>
	);
}

export default App
