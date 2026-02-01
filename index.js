import http from 'node:http'
import env from "./src/config/env.js";
import app from './src/app.js';
import './src/config/database.js'

const server = http.createServer(app)

server.listen(env.PORT, ()=>{
    console.log(`escuchando el puerto http://localhost:${env.PORT}`);
})