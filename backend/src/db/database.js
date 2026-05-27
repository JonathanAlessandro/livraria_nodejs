//para o modo promise funcionar precisa deletar esse /promise do import mysql, e também alterar a forma de criar o pool de conexões, 
// utilizando mysql.createPool() ao invés de mysql.promise().createPool(), 
// e também alterar a forma de fazer as consultas ao banco de dados, utilizando pool.query() 
// ao invés de pool.execute(), e também alterar a forma de lidar com os resultados das consultas, utilizando callbacks ao invés de async/await.
//import mysql from "mysql2";

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();



const pool = mysql.createPool({
    host: process.env.DB_HOST,                 //endereço do banco de dados
    port: process.env.DB_PORT,                 //porta do banco de dados (padrão para MySQL é 3306)
    user: process.env.DB_USER,                 //usuário do banco de dados
    password: process.env.DB_PASSWORD,         //senha do banco de dados
    database: process.env.DB_NAME,             //nome do banco de dados
    waitForConnections: true,                  //esperar por conexões quando o limite de conexões for atingido
    connectionLimit: 10,                       //número máximo de conexões simultâneas
    queueLimit: 0                              //número máximo de requisições na fila (0 significa sem limite)
}); 

export default pool; //exporta o pool de conexões para que possa ser usado em outros arquivos, como o server.js, onde as rotas serão definidas e as consultas ao banco de dados serão feitas.

