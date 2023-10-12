import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ExpressAdapter } from '@nestjs/platform-express';

@WebSocketGateway(8080, { namespace: 'chat' })
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    constructor(private readonly expressAdapter: ExpressAdapter) {
        // Enable CORS for WebSocket server
        this.expressAdapter.getInstance().enableCors({
            origin: '*:*', // You can specify specific origins as needed
        });
    }

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message);
    }
}
