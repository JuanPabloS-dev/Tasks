import {connect} from "mongoose";
import env from "./env.js";


(async()=>{
    try {
        const db = await connect(env.DB_HOST || "mongodb://localhost:27017/test");
    console.log('connected to ',db.connection.name);
    } catch (error) {
        console.error(error)
    }

})()