import {connect} from "mongoose";
import env from "./env.js";


(async()=>{
    try {
        const db = await connect(env.DB_HOST);
    console.log('connected to ',db.connection.name);
    } catch (error) {
        console.error(error)
    }

})()