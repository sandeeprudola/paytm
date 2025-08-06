const express = require("express");
const cors=require("cors");
const mainrouter = require("./routes");

const app=express();

app.use(cors());
app.use(express.json())
app.use('/api/v1',mainrouter);
app.listen(3000);