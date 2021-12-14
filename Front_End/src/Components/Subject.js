import '../subject.css';
import { useSelector,useDispatch } from "react-redux";
import { changeCardColor} from "../reducers/subjects/Subjects";

function Subject({index,ele}){
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
          subjects: state.Subjects.subjects,
          colorIndex: state.Subjects.cardColorIndex,
          colors: state.Subjects.cardColors,
        }; 
      });
      let color;
      if(index % 2 === 0 && index % 4 === 0){
        color =state.colors[0];
      }
      else if(!(index % 2 === 0) && (index-1%4 === 0)){
        color =state.colors[1];
      }
     else if(index % 2 === 0 && !(index % 4 === 0)){
        color =state.colors[2];
      }
      else if(!(index % 2 === 0)){
        color =state.colors[3];
      }
return(
    <div>
        <div className="card" style={{backgroundColor:color}}>
            {/* <img src="" style="width:100%"/> */}
            <div className="container" >
                <h4><b>{ele.name}</b></h4> 
                {/* <p>Architect  Engineer</p>  */}
            </div>
        </div>
    </div>
);
}
export default Subject;