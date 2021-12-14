import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/User/User";
import { useNavigate } from "react-router-dom";
import {setGradeId} from "../reducers/subjects/Subjects";

function SignUpStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   let firstName;
   let lastName;
   let userName;
   let email;
   let password;
   let confirmPassword;
   let phone;
   let grade=1;
   let emailExist=false;
   let usernameExist=false;

   function getStudents(event){

    event.preventDefault();
       let data=[];
       //get teachers and check if the username and email exist 
       axios
       .get("http://localhost:8080/students")
       .then(function (response) {
           console.log(response.data);
           data=response.data;
           for (let i=0; i<data.length;i++){
            //    data[i].grade;
               if(data[i].email === email){
                   emailExist=true;
                   console.log("emailExist",emailExist);
                   break;
               }
               if(data[i].username === userName){
                   usernameExist=true;
                   console.log("usernameExist",usernameExist);
                   break;
               } 
           }
           if(!usernameExist && !emailExist){
               console.log("all false");
               addStudent();
           }
       })
       .catch(function (error) {
         console.error(error);
       });
   }
   function addStudent(event) {
       //post the new teacher
       if(password === confirmPassword){
       console.log("in add teacher");
       // event.preventDefault();
       let student = {
         fName: firstName,
         lName: lastName,
         username: userName,
         email: email,
         password: password,
         phone:phone,
         grade:{id:grade}
       };
       axios
         .post("http://localhost:8080/students", student)
         .then(function (response) {
          const action = setUser(student);
          dispatch(action);
          const action2 = setGradeId(grade);
          dispatch(action2);
          navigate("/Student");
         })
         .catch(function (error) {
           console.error(error);
         });
     }//end of password if
     else{
         console.log("password and ");
         
     }
   }
   const changeFirstName = (e) => {
       firstName = e.target.value;
     };
     const changeLastName = (e) => {
       lastName = e.target.value;
     };
     const changeUserName = (e) => {
       userName = e.target.value;
       usernameExist=false
     };
     const changeEmail = (e) => {
       email = e.target.value;
       emailExist=false
     };
     const changePassword = (e) => {
       password = e.target.value;
     };
     const changeConfirmPassword = (e) => {
       confirmPassword = e.target.value;
     };
     const changePhone = (e) => {
       phone = e.target.value;
     };
     const changeGrade = (e) => {
        grade = e.target.value;
        console.log(grade)
      };
   return (
    <div className="container">
    <form className="well form-horizontal" method="post" id="contact_form">
      <fieldset>
        {/* Form Name */}
        <legend><center><h2><b>إنشاء حساب</b></h2></center></legend><br />
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">الاسم الاول</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="first_name" placeholder="الاسم الاول" className="form-control" type="text" onChange={changeFirstName}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">اسم العائلة</label> 
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="last_name" placeholder="اسم العائلة" className="form-control" type="text" onChange={changeLastName}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">اسم المستخدم بالانجليزي</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="user_name" placeholder="اسم المستخدم" className="form-control" type="text" onChange={changeUserName}/>
            </div>
          </div>
        </div>
         {/* Text input*/}
         <div className="form-group">
          <label className="col-md-4 control-label">عنوان البريد الإلكتروني</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" /></span>
              <input name="email" placeholder="البريد الإلكتروني" className="form-control" type="text" onChange={changeEmail}/>
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
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">تأكيد كلمة المرور</label> 
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input name="confirm_password" placeholder="تأكيد كلمة المرور" className="form-control" type="password" onChange={changeConfirmPassword}/>
            </div>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label">رقم الجوال</label>  
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
              <input name="contact_no" placeholder="(966)" className="form-control" type="text" onChange={changePhone}/>
            </div>
          </div>
        </div>
        <div className="form-group"> 
          <label className="col-md-4 control-label">الصف الدراسي</label>
          <div className="col-md-4 selectContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-list" /></span>
              <select name="department" className="form-control selectpicker" onChange={changeGrade}>
                <option value="1">الصف الاول الأبتدائي</option>
                <option value="2">الصف الثاني الأبتدائي</option>
                <option value="3">الصف الثالث الأبتدائي</option>
                <option value="4">الصف الرابع الأبتدائي</option>
                <option value="5">الصف الخامس الأبتدائي</option>
                <option value="6">الصف السادس الأبتدائي</option>
                <option value="7">الصف الاول متوسط</option>
                <option value="8">الصف الثاني متوسط</option>
                <option value="9">الصف الثالث متوسط</option>
                <option value="10">الصف الاول ثانوي</option>
                <option value="11">الصف الثاني ثانوي</option>
                <option value="12">الصف الثالث ثانوي</option>
              </select>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="form-group">
          <label className="col-md-4 control-label" />
          <div className="col-md-4"><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-warning" onClick={getStudents}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;تسجيل جديد <span className="glyphicon glyphicon-send" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  );
  }
  
  export default SignUpStudent;