import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

function App() {
  const navigator = useNavigate();
  function navigateToHome() { navigator("/"); }

  return (
    <div className="h-screen flex flex-col justify-between overflow-x-hidden ">
      <nav className='h-12 md:h-16 bg-black flex justify-between items-center relative bg-black/10' >
        <div className="md:ml-[7vw] p-1 pl-2 h-full flex items-center gap-4 hover:cursor-pointer" onClick={navigateToHome}>
          <img className="h-full" src="logo-removebg.png" alt="logo-img" />
          <h1 className="text-3xl pl-2 font-extrabold ">YT Tool</h1>
        </div>

        <div className="mr-[7vw] hidden md:flex flex-row justify-between items-center m-2">
          <NavLink className={({ isActive }) => (isActive ? 'border rounded-md p-1 font-semibold' : '')} to="/"><div className="px-2 mx-3 text-white hover:font-semibold">Home</div></NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'border rounded-md p-1 font-semibold' : '')} to="/about"><div className="px-2 mx-3 text-white hover:font-semibold">About</div></NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;