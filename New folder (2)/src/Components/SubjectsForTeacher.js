import { useSelector } from "react-redux";
import SubjectForTeacher from "./SubjectForTeacher";

function SubjectsForTeacher(){
    const state = useSelector((state) => {
        return {
          subjects: state.Subjects.subjects,
        }; 
      });
    return(
        <>
        {state.subjects.map((ele, index) => <SubjectForTeacher index={index} ele={ele} />)}
        </>
    )
}
export default SubjectsForTeacher;