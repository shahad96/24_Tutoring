import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8181/ws-message';

function Teacher(){
    const state = useSelector((state) => {
        return {
            teacher: state.User.user,
            token: state.User.token
        }; 
      });
      
      let onConnected = () => {
        console.log("Connected!!")
      }

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
            <button onClick={getTeacherOffers}>اظهار العروض</button>
        </div>
    );

}
export default Teacher;