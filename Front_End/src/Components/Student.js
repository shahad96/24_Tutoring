import Subjects from "./Subjects";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { setSubjects} from "../reducers/subjects/Subjects";
import { useEffect } from "react";

function Student(){
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      gradeId: state.Subjects.gradeId
    }; 
  });

    useEffect(() => {
        axios
          .get(`http://localhost:8080/subjects/${state.gradeId}`)
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
            <Subjects/>
        </div>
    );

}
export default Student;