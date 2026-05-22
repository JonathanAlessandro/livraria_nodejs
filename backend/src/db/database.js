import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: 'localhost',            //endereço do banco de dados
    port: 3306,                   //porta do banco de dados (padrão para MySQL é 3306)
    user: 'root',                 //usuário do banco de dados
    password: '',                 //senha do banco de dados
    database: 'bd_livrariaonline',//nome do banco de dados
    waitForConnections: true,     //esperar por conexões quando o limite de conexões for atingido
    connectionLimit: 10,          //número máximo de conexões simultâneas
    queueLimit: 0                 //número máximo de requisições na fila (0 significa sem limite)
}); 


export default pool; //exporta o pool de conexões para que possa ser usado em outros arquivos, como o server.js, onde as rotas serão definidas e as consultas ao banco de dados serão feitas.

