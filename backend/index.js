import  express  from "express";
const app = express();
import connectionDB from "./Connection/connectionDB.js";
import cors from 'cors';
import route from "./routers/vehicleRouters.js";


app.use(cors());
app.use(express.json());

app.use("/", route)

connectionDB("mongodb://localhost:27017/vehicles");
app.listen(5000, () => console.log("Connected"));
