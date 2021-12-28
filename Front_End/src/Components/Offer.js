import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";

function Offer(){
    const [note,setNote]=useState(" ");
    const state = useSelector((state) => {
        return {
            offerSubject: state.Subjects.offerSubject,
            student: state.User.user,
            token: state.User.token
        }; 
      });
    function makeOffesr(){
    let offer={note:note,subjectId:state.offerSubject.id,studentAccept:false,teacherAccept:false,zoomLink:null,student:{id:state.student.id}
        }
        console.log(offer);
        
        const config={
          headers:{Authorization:`Bearer ${state.token}`}
        }  
        console.log(state.token);
        
        axios
        .post("http://localhost:8080/offers",offer,config)
        .then(function (response) {
          console.log(response.data);
          let message={
            message:"shahad ali"
        }
          axios
        .post("http://localhost:8181/send",message)
        .then(function (response) {
          console.log(response.data);
          
        })
        .catch(function (error) {
          console.error(error);
        });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    function changeNote(e){
        setNote(e.target.value)
    }
        return(
            <div>
                <div className="form-group">
        <label className="col-md-4 control-label">:يمكنك اضافة ملاحظة على الطلب</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="user_name" className="form-control" type="text" onChange={changeNote}/>
          </div>
        </div>
      </div>
      <button onClick={makeOffesr}>أرسل الطلب</button>
            </div>
        );
}
export default Offer;