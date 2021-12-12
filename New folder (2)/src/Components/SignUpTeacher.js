import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubjects } from "../reducers/subjects/Subjects";
import SubjectsForTeacher from "./SubjectsForTeacher";

function SignUpTeacher() {
  const dispatch = useDispatch();
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
    useEffect(() => {
      axios
        .get("http://localhost:8080/subjects/1")
        .then(function (response) {
          console.log(response.data);
          const action = setSubjects(response.data);
          dispatch(action);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);


    function getTeachers(event){

        let data=[];
        //get teachers and check if the username and email exist 
        axios
        .get("http://localhost:8080/teachers")
        .then(function (response) {
            console.log(response.data);
            data=response.data;
            for (let i=0; i<data.length;i++){
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
                addTeacher();
            }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    function addTeacher(event) {
        //post the new teacher
        if(password === confirmPassword){
        console.log("in add teacher");
        // event.preventDefault();
        let teacher = {
          fName: firstName,
          lName: lastName,
          username: userName,
          email: email,
          password: password,
          phone:phone
        };
        axios
          .post("http://localhost:8080/teachers", teacher)
          .then(function (response) {
            console.log("in post teacher");
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
      <div>
        <input
              type="text"
            //   className="form-control"
              placeholder="الأسم الأول"
              onChange={changeFirstName}
            />
            <input
              type="text"
            //   className="form-control"
              placeholder="اسم العائلة"
              onChange={changeLastName}
            />
            <input
              type="text"
            //   className="form-control"
              placeholder="البريد الإلكتروني"
              onChange={changeEmail}
            />
            <input
              type="text"
            //   className="form-control"
              placeholder="اسم المستخدم بالانجليزي"
              onChange={changeUserName}
            />
            <input
              type="text"
            //   className="form-control"
              placeholder="كلمة المرور"
              onChange={changePassword}
            />
            <input
              type="text"
            //   className="form-control"
              placeholder="تأكيد كلمة المرور "
              onChange={changeConfirmPassword}
            />
            <input
              type="text"
            //   className="form-control"
              placeholder="رقم الجوال"
              onChange={changePhone}
            />
            <select name="cars" id="cars" onChange={changeGrade}>
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
            <SubjectsForTeacher/>
            <button onClick={getTeachers}>تسجيل جديد</button>
      </div>
    );
  }
  
  export default SignUpTeacher;