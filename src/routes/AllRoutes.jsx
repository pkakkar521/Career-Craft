import { Route, Routes , BrowserRouter} from "react-router-dom";

import SignupPage from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ProductList from "../pages/Homepage";
import BarChart from "../pages/BarChart";
import Subject from "../pages/Subject";
import Jeemain from "../pages/Jeemain";
import Gate from "../pages/Gate";
import Updated from "../pages/NotesPage";
import Profile from "../pages/Profile";
import Navbar from "../components/Homepage/Navbar/Navbar";
import { useState, useEffect } from "react";

function AllRoutes() {
  // Define state variable to store the name
  /*const [userName, setUserName] = useState("");

  // Create function to handle signup and update state variable
  const handleSignup = (name) => {
    setUserName(name);
    localStorage.setItem("userName", name); // Store user name in local storage
  };

  useEffect(() => {
    // Retrieve user name from local storage when component mounts
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []); // Run this effect only once when the component mounts*/

  return (
    <div className="App">
      
        
        <Navbar/>
        <Routes>
        <Route element={<PrivateRoute />}>
            {/* Pass userName as prop to ProductList component */}
            <Route path="/" element={<ProductList  />} />
            <Route path="/add" element={<BarChart />} />
            
            <Route path="/update" element={<Updated />} />
            <Route path="/logout" element={<h1>logout listening</h1>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/jeemain" element={<Jeemain />} />
            <Route path="/gate" element={<Gate />} />
          </Route>

          {/* Pass handleSignup function as prop to Signup component */}
          <Route path="/signup" element={<SignupPage  />} />
          
        </Routes>
      
    </div>
  );
}

export default AllRoutes;