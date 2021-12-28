import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { setToken,setUser } from "../reducers/User/User";


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
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
                navigate("/student");
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
          console.log("اسم المستخدم او كلمة المرور غير صحيحة");
          
        })
      }
    return(
        <div className="container">
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">اسم المستخدم</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="user_name" placeholder="اسم المستخدم" className="form-control" type="text" onChange={changeUserName}/>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">كلمة المرور</label> 
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="user_password" placeholder="كلمة المرور" className="form-control" type="password" onChange={changePassword}/>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="form-group">
        <label className="col-md-4 control-label" />
        <div className="col-md-4"><br /><button type="submit" className="btn btn-warning" onClick={logInUser}>تسجيل جديد <span className="glyphicon glyphicon-send" /></button>
        </div>
      </div>
        </div>
    );
}
export default LogIn;