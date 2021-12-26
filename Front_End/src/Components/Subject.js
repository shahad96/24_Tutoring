import '../subject.css';
import { useSelector,useDispatch } from "react-redux";
import { setOfferSubject} from "../reducers/subjects/Subjects";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Subject({index,ele}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
      else if(!(index % 2 === 0) && ((index-1)%4 === 0)){
        color =state.colors[1];
      }
     else if(index % 2 === 0 && !(index % 4 === 0)){
        color =state.colors[2];
      }
      else if(!(index % 2 === 0)){
        color =state.colors[3];
      }
      let x ="https://yt3.ggpht.com/f75PjiLSsxkjVMk-HOyHItBpbJlqoeSpSYNRAGI7gNHYYxXCTTRcnEzdPrpKwVXqJ9tBBpWwMF4=s900-c-k-c0x00ffffff-no-rj";

      function makeOffesr(){ 
          const action = setOfferSubject(ele);
        dispatch(action);
        navigate("/offer");
      };
return(
    <div>
        <div className="card" style={{backgroundColor:color}} onClick={makeOffesr}>
            <img src={x} style={{width:"100%"}}/>
            <div className="container" >
                <h4><b>{ele.name}</b></h4> 
                {/* <p>Architect  Engineer</p>  */}
            </div>
        </div>
    </div>
);
}
export default Subject;