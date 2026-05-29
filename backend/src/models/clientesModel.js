import pool from "../db/database.js";

//model do projeto incumbido de lidar com as operações relacionadas aos clientes no banco de dados. 
class ClientesModel {
    async showClientes() {
        const [rows] = await pool.execute("SELECT * FROM clientes;");
        return rows;
        
        //versão utilizando promises de fazer a consulta ao banco de dados, onde a função retorna uma nova Promise que é resolvida ou rejeitada com base no resultado da consulta.
        // return new Promise((resolve, reject) => {
        //     pool.query("SELECT * FROM clientes;", (error, results) => {
        //         if (error) {
        //             return reject(error);
        //         } else {
        //             return resolve(results);
        //         }
        //     });
        // });
    }

    async getClienteByEmail(email) {
        const [[row]] = await pool.execute("SELECT * FROM clientes where email = ?;", [email]);
        return row;
    }   

    // espera receber um objeto com as propriedades nome, email, telefone, cidade e estado, que correspondem às colunas da tabela clientes no banco de dados. 
    // O método então executa uma consulta SQL para inserir um novo cliente na tabela usando os valores fornecidos. 
    async createCliente(clienteData){
        const { nome, email, telefone, cidade, estado } = clienteData;
        const [row] = await pool.execute("INSERT INTO clientes (nome, email, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?);",[nome, email, telefone, cidade, estado]);
        return row;
    }

    async updateCliente(id, clienteData){
        const { nome, email, telefone, cidade, estado } = clienteData;
        const [row] = await pool.execute("UPDATE clientes SET nome = ?, email = ?, telefone = ?, cidade = ?, estado = ? WHERE id = ?;",[nome, email, telefone, cidade, estado, id]);
        return row;
    }

    async deleteCliente(id){
        const [row] = await pool.execute("DELETE FROM clientes WHERE id = ?;", [id]);
        return row;
    }

}

//exportando a classe
export default new ClientesModel();