let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");

mongoose.connect("mongodb://127.0.0.1/monedero")
.then(()=>{
    console.log("Conectados a la base de datos");
}).catch((err)=>{
    console.log("Error al conectar la base de datos: ", err);
});

let registroRutas = require("./routes/registro.route");

let app = express();
app.use(cors());
app.use(express.json());
app.use("/registro", registroRutas);

app.listen(3001, ()=>{
    console.log("Servidor en el puerto 3001");
});