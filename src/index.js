import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
dotenv.config();


connectDB()
.then( () =>{
    app.on( "error",(error) => {
        console.log("Error in connection between db and src/index.js", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT || 8000} `);
    })
})
.catch( (err) => {
    console.log("MongoDb connection failed in src/index.js", err);
})










/* import express from "express";
const app = express();
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error" , () => {
            console.log("Error in connection between app and db", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port:${process.env.PORT}`);
        })
        
    }
    catch(error){
        console.log("Error", error);
        throw error
    }
})()
*/