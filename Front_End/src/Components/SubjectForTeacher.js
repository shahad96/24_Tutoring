import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import { setTeacherSubjects } from "../reducers/subjects/Subjects";

function SubjectForTeacher({index,ele}){

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
          subjects: state.Subjects.subjects,
          teacherSubjects: state.Subjects.teacherSlectedSubjects,
          gradeId: state.Subjects.gradeId
        }; 
      });

    function addSubjectsToTeacher(){
       let copy=[];
       copy= state.teacherSubjects.slice();
       console.log(state.teacherSubjects);
       let object={teacher:{id:0},grade:{id:state.gradeId},subject:{id:ele.id}};
       let bool = true;
       for(let i=0;i<copy.length;i++){
        if (copy[i].grade.id===object.grade.id && copy[i].subject.id===object.subject.id){
            bool = false;
            break;
           }
       }
       if(bool){
        copy.push(object);
        const action = setTeacherSubjects(copy);
        dispatch(action); 
       }  
    }
    return(
        <>
        <Button variant="outline-secondary" onClick={addSubjectsToTeacher}>{ele.name}</Button>
        </>
    )
}
export default SubjectForTeacher;