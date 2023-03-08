import express, { Express } from 'express'
// import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from "body-parser";
import router from "./index"

const app: Express = express()

// const PORT: string | number = process.env.PORT || 4000
// const MONGO_USER: string  = process.env.MONGO_USER as string
// const MONGO_PASSWORD: string  = process.env.MONGO_PASSWORD  as string
// const MONGO_DB: string  = process.env.MONGO_DB  as string

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router)

// const uri: string = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:27017/${MONGO_DB}?retryWrites=true&w=majority`
// mongoose
//     .connect(uri)
//     .then(() =>
//         app.listen(PORT, () =>
//             console.log(`Server running on http://localhost:${PORT}`)
//         )
//     )
//     .catch((error) => {
//         throw error
//     })

app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
});