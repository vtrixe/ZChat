"use client"
import { useEffect } from 'react';
import io from 'socket.io-client';

export default function ChatComponent() {
  useEffect(() => {
    const socket = io("http://localhost:3000", { path: "/api/socket/" });

    socket.on("connect", () => {
      console.log("Connected to socket.io server", socket.id);
    });

    socket.on("welcome", (message) => {
      console.log(message);
    });

    // Return a cleanup function that explicitly calls `socket.disconnect`
    // and does not return anything (void)
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Chat Component</div>;
}
