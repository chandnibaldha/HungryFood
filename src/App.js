import "./App.css";
import Home from "./screen/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
import { CartProvider } from "./screen/contextReducer";
import MyOrder from "./screen/Myorder";
import Additem from "./screen/Additem";
import About from "./screen/About";
import ContactUs from "./screen/ContactUs";
import Feedback from "./screen/Feedback";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element = {<About/>}/>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/additem" element={<Additem />} />
             <Route exact path="/ContactUs" element = {< ContactUs/>}/>
             <Route exact path="/Feedback" element = {<Feedback/>} />  
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
