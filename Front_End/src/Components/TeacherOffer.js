import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import React from 'react';
import Popup from 'reactjs-popup';
import { useModal } from 'react-hooks-use-modal';


function TeacherOffer({index,ele}){

    const [name,setName]=useState("");
    const state = useSelector((state) => {
        return {
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

    useEffect(() => {
        
     axios
     .get(`http://localhost:8080/subjects/subject/${ele.subjectId}`)
     .then(function (response) {
        setName(response.data.name);
     })
     .catch(function (error) {
       console.error(error);
     });
      }, []);

    return(

        <Popup
        trigger={ <div>
            <Card style={{width:"100%",height:"200px",backgroundColor:color}}>
    <Card.Header style={{direction: "rtl"}}>{name}</Card.Header>
    <Card.Body style={{direction: "rtl"}}> 
      <Card.Text>{ele.note}</Card.Text>
    </Card.Body>
  </Card>
        </div>}
    modal
    nested
  >
  <h5 style={{direction: "rtl"}}>هل انت متأكد من رغبتك بقبول العرض؟</h5>
  <button></button>
  </Popup>

    );
    
}
export default TeacherOffer;