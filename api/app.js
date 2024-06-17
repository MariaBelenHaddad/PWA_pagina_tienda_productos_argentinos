import express from "express";
import cors from "cors";

import {router as routes} from "./routes/routes.js" //Importo el archivo routes
// const routes = require("./routes/routes") //Importo el archivo routes

const app = express();

app.disable("X-Powered-By") //Desabilito este encabezado p/tener más seguridad
app.use(express.json()); //Define que se va a transmitir info en formato json
app.use(cors()); //Primero debo instalarlo con NPM
app.use(express.urlencoded({extended:true})) 

/*app.options("/", (req, res) =>{
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); CORREGIR DIRECCIÓN IP
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"); 
    res.end();
}) // --> esto nos permite trabajar sin tener errores de CORS, al instalar el paquete CORS ya no lo necesito*/

const PORT = 4000;//Voy a determinar el puerto

//Para ejecutar este archivo uso Node o Nodemon. Debo instalar el paquete nodemon y ejecutarlo por consola: nodemon index.js

app.use("",routes);//Cuando llegué cualquier endpoint voy al archivo routes

//También puedo hacer: app.use("/productos", routesProducts); cuando entre con este endpoint voy al archivo routesProducts y así creo varios archivos según las secciones de mi página

app.listen(PORT, (err) =>{
    console.log(err ? err : `Server running on localhost:${PORT}`)
}); //Uso el método listen para correr el servidor. El console log es un operador ternario, si no hay error deja este mensaje