import axios from "axios";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setSubjects,setGradeId} from "../reducers/subjects/Subjects";
import { setUser,setToken } from "../reducers/User/User";
import SubjectsForTeacher from "./SubjectsForTeacher";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SignUpTeacher() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      teacherSubjects: state.Subjects.teacherSlectedSubjects,
      user: state.User.user
    }; 
  });
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [grade,setGrade]=useState(1);
  const [emailExist,setEmailExist]=useState(false);
  const [usernameExist,setUsernameExist]=useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/subjects/${grade}`)
      .then(function (response) {
        console.log(response.data);
        const action = setSubjects(response.data);
        dispatch(action);
        const action2 = setGradeId(grade);
      dispatch(action2);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [grade]);
  
  function addTeacher(event) {
    event.preventDefault();
      //post the new teacher
      if(password === confirmPassword){
        let user = {
          username: userName,
          password: password,
          role:"teacher"
        };
        axios
         .post("http://localhost:8080/users", user)
         .then(function (response) {
           if(response.data == null){
             console.log(response.data);
             console.log("username exist");
           }
           //add teacher
          else{
            let teacher = {
              fName: firstName,
              lName: lastName,
              email: email,
              phone:phone,
              user:{id:response.data.id}
            };
            console.log(teacher);
            //post teacher
            axios
              .post("http://localhost:8080/teachers", teacher)
              .then(function (response) {

                if(response.data === null){
                  console.log("email exist");
                }
                else{
                
                    const action = setUser(response.data);
                    dispatch(action);
                    
                    //post grades and subjects to the teacher
                    let copy=[];
                    copy=state.teacherSubjects.slice();
                    copy.forEach(element => element.teacher.id= response.data.id);
                    console.log(copy);
                    axios
                    .post("http://localhost:8080/link", copy)
                    .then(function (response) {
                      console.log(response.data);
                      //looooooooooooooooooooooooooooooooooooooooooooog in
          user ={username:userName,password:password}
          axios
        .post("http://localhost:8080/login",user)
        .then(function (response) {
            console.log(response.data);
            // save the token in redux
            const action_token =setToken(response.data.access_token);
            dispatch(action_token);
                navigate("/teacher");
        })//login
        .catch(function (error) {
          console.error(error); 
        })
                    })
                    .catch(function (error) {
                      console.error(error);
                    });
                  }
              })
            
              .catch(function (error) {
                console.error(error);
              }); 
              //--------------------------------------------------------

          }
          })
          .catch(function (error) {
            console.error(error); 
          })
      
    }//end of password if
    else{
        console.log("password and ");
        
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
      setUsernameExist(false);
    };
    const changeEmail = (e) => {
      setEmail(e.target.value);
      setEmailExist(false);
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
      e.preventDefault();
      setGrade(parseInt(e.target.value));
      // changeGrades()
    };
return(

  <div className="container">
  <form className="well form-horizontal" method="post" id="contact_form">
    <fieldset>
      {/* Form Name */}
      <legend><center><h2><b>?????????? ????????</b></h2></center></legend><br />
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
        <label className="col-md-4 control-label">????????</label>
        <h6>?????????? ???????????? ???????? ???? ???? ???? ???? ?????????? ???????????? ???????? ???????? ????????????????</h6>
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
      <SubjectsForTeacher/>
      {/* Button */}
      <div className="form-group">
        <label className="col-md-4 control-label" />
        <div className="col-md-4">
          <Button variant="secondary" type="submit"  onClick={addTeacher}>?????????? ???????? <span className="glyphicon glyphicon-send" /></Button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
);
  }
  
  export default SignUpTeacher;