import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import SocketService from './socket';

//For env File 
dotenv.config();

const server = async () => {
    const serverInstance= http.createServer();
    const PORT = process.env.PORT || 8000;

   const  socketserviceinstance = new SocketService();


   
  const socketInitialized=  socketserviceinstance.io?.attach(serverInstance);

   


    serverInstance.listen(PORT, ()=>{
        console.log("http server running at PORT:8000")
    })

    if(!!socketInitialized){
        console.log("socket running at port 8000");
    }

    socketserviceinstance.initListeners();



  
    

} 

server();

