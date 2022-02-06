import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SignUpStudentCss.css';
import logo from "../images/zdny_logo.png";
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8181/ws-message';

function Offer(){
    const [note,setNote]=useState(" ");
    const [toggel,setToggel]=useState(true);
    const [toggel2,setToggel2]=useState(false);
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
          // هنا الانتقال الى المرحلة التالية
          
          
        })
        .catch(function (error) {
          console.error(error);
        });
        })
        .catch(function (error) {
          console.error(error);
        });
        setToggel(false);
        setToggel2(true);
    }
    function changeNote(e){
        setNote(e.target.value)
    }
    let onConnected = () => {
      console.log("Connected!!")
    }

    function getOffers(){

    }
        return(
          
          <div className="cen" style={{backgroundColor:"#71B48F"}}> 
            <Card className="offercard">
            <img src={logo}/>
            {toggel2 && <h5 style={{direction: "rtl"}}>في انتظار الردود ...</h5>}
               {toggel && <div style={{direction: "rtl"}}><div  style={{direction: "rtl"}}>
        <label >يمكنك اضافة ملاحظة على الطلب:</label> 
            <input name="user_name" className="form-control offerInput" type="text" onChange={changeNote}/>
          
      </div>
      <br/>
      <Button variant="secondary" onClick={makeOffesr}>إرسال الطلب</Button></div>}
            </Card>
            <div>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message']}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={getOffers}
        debug={false}
      />
      {/* <div>{message}</div> */}
    </div>
            </div>
        );
}
export default Offer;