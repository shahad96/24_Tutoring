import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Teacher(){
    const state = useSelector((state) => {
        return {
            teacher: state.User.user
        }; 
      });
      function getTeacherOffers(){
          console.log(state.teacher);
          
    axios
    .get(`http://localhost:8080/offers/${state.teacher.id}`)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
    return(
        <div>
            <button onClick={getTeacherOffers}>اظهار العروض</button>
        </div>
    );

}
export default Teacher;