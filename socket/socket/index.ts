import { Server } from "socket.io";

class SocketService {
    private _io: Server | undefined;
    constructor(){

        console.log("Initializing Socket Server")

        this._io = new Server({
          cors : {
            allowedHeaders : ['*'],
            origin: '*'
          }
        });




    
    }

    get io() {
        return this._io;


    }

    public initListeners() {
        const io = this.io;
        console.log("Init Socket Listeners...");
    
        io?.on("connect", (socket) => {
          console.log(`New Socket Connected`, socket.id);
          socket.on("event:message", async ({ message }: { message: string }) => {
            console.log("New Message Rec.", message);
            // publish this message to redis
           
          });
        });
    
        
      }

}

export default SocketService;