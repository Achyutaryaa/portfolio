import express from "express.js";
import { prepare } from "./database.js";
const app = express();
const port = 3000;

app.get("/fruits", (req, res) => {
    const sql = "SELECT * FROM fruits";
    const fruits = prepare(sql).all();
    res.status(200).json({
        fruits: fruits
    });
});

app.listen(port, () => {
    console.log(`App is running on PORT ${port}`);
});