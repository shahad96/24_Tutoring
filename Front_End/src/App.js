import './App.css';
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignUpTeacher from "./Components/SignUpTeacher";
import SignUpStudent from "./Components/SignUpStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup/signup" element={<SignUp/>} />
          <Route path="/signup/signupteacher" element={<SignUpTeacher/>} />
          <Route path="/signup/signupstudent" element={<SignUpStudent/>} />
          
          {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
