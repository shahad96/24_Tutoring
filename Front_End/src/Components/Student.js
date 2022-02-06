import Subjects from "./Subjects";
import Header from "./Header";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { setSubjects} from "../reducers/subjects/Subjects";
import { useEffect } from "react";
import logo from "../images/zdny_logo.png";
import { BsBoxArrowLeft } from "react-icons/bs";
import './SignUpStudentCss.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Student(){
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      user: state.User.user,
      token: state.User.token
    }; 
  });

    useEffect(() => {
      console.log(state.user.id);
      console.log(state.user);
      
      const config={
        headers:{Authorization:`Bearer ${state.token}`}
      }
            // print the student subjects useing the grade id
            axios
          .get(`http://localhost:8080/subjects/${state.user.grade.id}`,config)
          .then(function (response) {
            console.log(response.data);
            const action = setSubjects(response.data);
            dispatch(action);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);
    return(
      <div>
        <Header/>
            <Subjects/>
        </div>
    );

}
export default Student;