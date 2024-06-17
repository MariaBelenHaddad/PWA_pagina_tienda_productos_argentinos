import mysql2 from "mysql2/promise";
const dbConfig = {
    host: 'localhost',
    user: 'root',
    //password: 'root',
    port: 3306,
    database: 'tiendaproductosargentinos'
};
export const db = await mysql2.createConnection(dbConfig);

db.connect(err =>{
    console.log(err ? `Error al conectar ${err.message}` : "Connected to database")
})