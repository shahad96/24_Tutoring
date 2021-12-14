import './App.css';
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignUpTeacher from "./Components/SignUpTeacher";
import SignUpStudent from "./Components/SignUpStudent";
import Student from "./Components/Student";
import Offer from "./Components/Offer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signup/teacher" element={<SignUpTeacher/>} />
          <Route path="/signup/student" element={<SignUpStudent/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/offer" element={<Offer/>} />
          
          {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
