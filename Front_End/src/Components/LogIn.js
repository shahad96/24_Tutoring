import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { setToken,setUser } from "../reducers/User/User";
import './LogInCss.css';
import Button from 'react-bootstrap/Button';
import logo from "../images/zdny_logo.png";


function LogIn(){
  const state = useSelector((state) => {
    return {
      token: state.User.token
    }; 
  });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [toggel,setToggel]=useState(false);

    // save the username and password from input
    const changeUserName = (e) => {
        setUserName(e.target.value);
      };
      const changePassword = (e) => {
        setPassword(e.target.value);
      };

    // post login request 
      function logInUser(){
          let user ={username:userName,password:password}
        axios
        .post("http://localhost:8080/login",user)
        .then(function (response) {
            console.log(response.data);
            // save the token in redux
            const action =setToken(response.data.access_token);
            dispatch(action);
            // decode the coded token
            var decoded = jwt_decode(response.data.access_token);
            console.log(decoded);
            
            const config={
              headers:{Authorization:`Bearer ${state.token}`}
            }
            
            // if the user is student go to student page and if it teacher go to teacher page
            if(decoded.roles[0]== "student"){
              console.log("in get student");
              
              // get the student using the login user id 
              axios
              .get(`http://localhost:8080/students/student/user/${decoded.id}`,config)
              .then(function (response) {
            const action2 =setUser(response.data);
            dispatch(action2);
            navigate("/student");
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
            }
            else if(decoded.roles[0]== "teacher"){
              axios
              .get(`http://localhost:8080/teachers/user/${decoded.id}`,config)
              .then(function (response) {
            const action2 =setUser(response.data);
            dispatch(action2);
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
              
                navigate("/teacher");
            }
        })
        .catch(function (error) {
          console.error(error);
          setToggel(true);
          console.log("اسم المستخدم او كلمة المرور غير صحيحة");
          
        })
      }
    return(
    <div className="containerr">
      <div className="top">
      <div className="bottom">
      <div className="center">
      <div>
        {/* logo */}
        <img src={logo}/>
      {/* Text input*/}
      <div >
        <label >اسم المستخدم</label>  
        
            <input name="user_name" placeholder="اسم المستخدم" type="text" onChange={changeUserName}/>
         
      </div>
      {/* Text input*/}
      <div>
        <label >كلمة المرور</label> 
            <input name="user_password" placeholder="كلمة المرور"  type="password" onChange={changePassword}/>
      </div>
      <div>
      {toggel && <h7>*اسم المستخدم او كلمة المرور غير صحيحة</h7>}
      </div>
      {/* Button */}
      </div>
      <div>
        <br/>
        <Button variant="secondary" onClick={logInUser}>تسجيل جديد </Button>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
}
export default LogIn;