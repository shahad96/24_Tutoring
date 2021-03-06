import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setGradeId} from "../reducers/subjects/Subjects";
import { useState } from "react";
import { setToken,setUser } from "../reducers/User/User";
import Button from 'react-bootstrap/Button';
import './SignUpStudentCss.css';

function SignUpStudent() {
  const state = useSelector((state) => {
    return {
      user: state.User.user,
      token: state.User.token
    }; 
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
    // use state varibals to save user inputs
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [grade,setGrade]=useState(1);

   function addStudent(event) {
    event.preventDefault();
       //post the new student
       if(password === confirmPassword){
       console.log("in add student");
       let user = {
        username: userName,
        password: password,
        role:"student"
      };
       axios
         .post("http://localhost:8080/users", user)
         .then(function (response) {
           if(response.data == null){
             console.log(response.data);
             
             console.log("username exist");
           }
          else{
            let student = {
              fName: firstName,
              lName: lastName,
              email: email,
              phone:phone,
              grade:{id:grade},
              user:{id:response.data.id}
            };
            console.log(student);
            
            axios
          .post("http://localhost:8080/students", student)
          .then(function (response) {
            if(response.data === null){
              console.log("email exist");
            }
            else{
              console.log(response.data);
           const action = setUser(response.data);
          dispatch(action);
          //looooooooooooooooooooooooooooooooooooooooooooog in
          user ={username:userName,password:password}
          axios
        .post("http://localhost:8080/login",user)
        .then(function (response) {
            console.log(response.data);
            // save the token in redux
            const action_token =setToken(response.data.access_token);
            dispatch(action_token);
                navigate("/student");
        })//login
        .catch(function (error) {
          console.error(error); 
        })
            }
          })//add student
          .catch(function (error) {
            console.error(error);
          });
          }//end of else
         })//add user
         .catch(function (error) {
           console.error(error);
         });
     }//end of password if
     else{
         console.log("password and congirm password not equale");
         
     }
   }
   const changeFirstName = (e) => {
    setFirstName(e.target.value);
     };
     const changeLastName = (e) => {
      setLastName(e.target.value);
     };
     const changeUserName = (e) => {
      setUserName(e.target.value);
     };
     const changeEmail = (e) => {
       setEmail(e.target.value);
       
     };
     const changePassword = (e) => {
       setPassword(e.target.value);
     };
     const changeConfirmPassword = (e) => {
       setConfirmPassword(e.target.value);
     };
     const changePhone = (e) => {
       setPhone(e.target.value);
     };
     const changeGrade = (e) => {
        setGrade(e.target.value);
      };
   return (

       
    <div className="container">
    <form className="well form-horizontal" method="post" id="contact_form">
      <fieldset>
        {/* Form Name */}
        <legend><h2><b>?????????? ????????</b></h2></legend><br />
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">?????????? ??????????</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="first_name" placeholder="?????????? ??????????" className="form-control" type="text" onChange={changeFirstName}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">?????? ??????????????</label> 
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="last_name" placeholder="?????? ??????????????" className="form-control" type="text" onChange={changeLastName}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">?????? ???????????????? ????????????????????</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="user_name" placeholder="?????? ????????????????" className="form-control" type="text" onChange={changeUserName}/>
            </div>
          </div>
        </div>
         {/* Text input*/}
         <div className="form-group">
          <label className="col-md-4 control-label">?????????? ???????????? ????????????????????</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" /></span>
              <input name="email" placeholder="???????????? ????????????????????" className="form-control" type="text" onChange={changeEmail}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">???????? ????????????</label> 
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="user_password" placeholder="???????? ????????????" className="form-control" type="password" onChange={changePassword}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">?????????? ???????? ????????????</label> 
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="confirm_password" placeholder="?????????? ???????? ????????????" className="form-control" type="password" onChange={changeConfirmPassword}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">?????? ????????????</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
              <input name="contact_no" placeholder="(966)" className="form-control" type="text" onChange={changePhone}/>
            </div>
          </div>
        </div>
        <div className="form-group"> 
          <label className="col-md-4 control-label">???????? ??????????????</label>
          <div className="col-md-4 selectContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-list" /></span>
              <select name="department" className="form-control selectpicker" onChange={changeGrade}>
                <option value="1">???????? ?????????? ??????????????????</option>
                <option value="2">???????? ???????????? ??????????????????</option>
                <option value="3">???????? ???????????? ??????????????????</option>
                <option value="4">???????? ???????????? ??????????????????</option>
                <option value="5">???????? ???????????? ??????????????????</option>
                <option value="6">???????? ???????????? ??????????????????</option>
                <option value="7">???????? ?????????? ??????????</option>
                <option value="8">???????? ???????????? ??????????</option>
                <option value="9">???????? ???????????? ??????????</option>
                <option value="10">???????? ?????????? ??????????</option>
                <option value="11">???????? ?????????????? ????????</option>
                <option value="12">???????? ???????????? ????????</option>
              </select>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="form-group">
          <label className="col-md-4 control-label" />
          <div className="col-md-4">
            <Button variant="secondary" onClick={addStudent}>?????????? ???????? </Button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>

  );
  }
  
  export default SignUpStudent;