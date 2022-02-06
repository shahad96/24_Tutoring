import { useSelector } from "react-redux";
import TeacherOffer from "./TeacherOffer";
import '../subject.css';

function TeacherOffers(){
    const state = useSelector((state) => {
        return {
          offers: state.Offers.offers,
        }; 
      });
      
      
    return(
        <div id="grid">

{state.offers.map((ele, index) => <TeacherOffer index={index} ele={ele}/>)}
        </div>
    );

}
export default TeacherOffers;