import '../home.css';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubjects } from "../reducers/subjects/Subjects";
import SubjectsForTeacher from "./SubjectsForTeacher";
import LogIn from './LogIn';
import logo from "../images/zdny_logo.png";
import { BsBoxArrowInRight } from "react-icons/bs";


function Home(){
return(
  <div className="image">

  <div className="navbarr">
  <h5><a className="login" href="/Login"><BsBoxArrowInRight />تسجيل الدخول</a></h5>
  <img src={logo} className="logo"/>
  </div>

  <h1 className="signUp">ليس لديك حساب؟ سجل الأن <a href="/signup/teacher"> كمعلم</a> <a href="/signup/student">كطالب </a></h1>
    
  </div>
);
}
export default Home;