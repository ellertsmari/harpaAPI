import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
app.use(cors());
app.get("/", async (req, res)=>{

 const r = await fetch("https://www.harpa.is/page-data/sq/d/2536411051.json")
 const data = await r.json()
 console.log(data);

 res.json(data)
})

app.listen(3001);