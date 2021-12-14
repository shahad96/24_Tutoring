import { useSelector } from "react-redux";
import Subject from "./Subject";

function Subjects(){
    const state = useSelector((state) => {
        return {
          subjects: state.Subjects.subjects,
        }; 
      });
     
return(
    <div>
        {state.subjects.map((ele, index) => <Subject index={index} ele={ele}/>)}
    </div>
);
}
export default Subjects;