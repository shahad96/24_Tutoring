import './App.css';
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import SignUpTeacher from "./Components/SignUpTeacher";
import SignUpStudent from "./Components/SignUpStudent";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher";
import Offer from "./Components/Offer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<LogIn/>} />
          <Route path="/signup/teacher" element={<SignUpTeacher/>} />
          <Route path="/signup/student" element={<SignUpStudent/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/teacher" element={<Teacher/>} />
          <Route path="/offer" element={<Offer/>} />
          
          {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
