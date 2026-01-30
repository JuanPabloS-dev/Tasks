import http from 'node:http'
import env from "./config/env.js";
import app from './app.js';
import './config/database.js'

const server = http.createServer(app)

server.listen(env.PORT, ()=>{
    console.log(`escuchando el puerto http://localhost:${env.PORT}`);
})