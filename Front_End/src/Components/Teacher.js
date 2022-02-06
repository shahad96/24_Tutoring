import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import SockJsClient from 'react-stomp';
import Header from "./Header";
import TeacherOffers from "./TeacherOffers";
import { setOffers } from "../reducers/offers/Offers";
import { useEffect } from "react";

const SOCKET_URL = 'http://localhost:8181/ws-message';

function Teacher(){
  const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            teacher: state.User.user,
            token: state.User.token
        }; 
      });
      
      let onConnected = () => {
        console.log("Connected!!")
      }

      useEffect(() => {
        console.log(state.teacher);
        const config={
         headers:{Authorization:`Bearer ${state.token}`}
       }  
       console.log(state.teacher.id);
        
     axios
     .get(`http://localhost:8080/offers/${state.teacher.id}`,config)
     .then(function (response) {
         console.log(response.data);
         
         const action =setOffers(response.data);
             dispatch(action);
     })
     .catch(function (error) {
       console.error(error);
     });
      }, []);
      function getTeacherOffers(){
          console.log(state.teacher);
       const config={
        headers:{Authorization:`Bearer ${state.token}`}
      }  
      console.log(state.teacher.id);
       
    axios
    .get(`http://localhost:8080/offers/${state.teacher.id}`,config)
    .then(function (response) {
        console.log(response.data);
        
        const action =setOffers(response.data);
            dispatch(action);
    })
    .catch(function (error) {
      console.error(error);
    });
}
    return(
        <div>
            <div>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message']}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={getTeacherOffers}
        debug={false}
      />
      {/* <div>{message}</div> */}
    </div>
    <Header/>
    <TeacherOffers/>  
        </div>
    );

}
export default Teacher;