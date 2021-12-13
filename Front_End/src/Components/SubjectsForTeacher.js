import { useSelector } from "react-redux";
import SubjectForTeacher from "./SubjectForTeacher";
import '../home.css';

function SubjectsForTeacher(){
    const state = useSelector((state) => {
        return {
          subjects: state.Subjects.subjects,
        }; 
      });
    return(
        <div id="grid">
        {state.subjects.map((ele, index) => <SubjectForTeacher index={index} ele={ele} />)}
        </div>
    )
}
export default SubjectsForTeacher;