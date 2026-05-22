import clientesModel from "../models/clientesModel.js";

class ClientesController {
    async getAllClientes(req, res) {
        const allClientes = await clientesModel.showClientes();
        if (allClientes.length === 0) {
            return res.json({
                message: "Nenhum usuário encontrado!",
            });
        }
        return res.json(allClientes);
    }

    async clienteByEmail(req, res) {
        const { email } = req.body;
        const findEmail = await clientesModel.getClienteByEmail(email);

        if (findEmail?.email === email) {
            return res.json({
                message: "Email já cadastrado!",
            });
        }
        return res.json({ email: findEmail.email })
    }

    async storeCliente(req, res) {
        const { nome, email, telefone, cidade, estado } = req.body;

        if (nome === "" || !email || !telefone || !cidade || !estado) {
            return res.json({ message: "Todos os campos são Obrigatórios" });
        }

        const findEmail = await clientesModel.getClienteByEmail(email);

        if (findEmail?.email === email) {
            return res.json({
                message: "Email já cadastrado!",
            });
        }

        const createCliente = await clientesModel.createCliente(req.body);

        if (createCliente.affectedRows === 0) {
            return res.json({
                message: "Não foi possível realizar o cadastro!",
            });
        }

        return res.json({
            message: "Cadastro realizado com Sucesso!",
        });
    }

    async updateCLienteById(req, res) {
        const id = Number(req.params.id);
        const { nome, email, telefone, cidade, estado } = req.body;
        const findEmail = await clientesModel.getClienteByEmail(email);


        if (nome === "" || !email || !telefone || !cidade || !estado) {
            return res.json({ message: "Todos os campos são Obrigatórios" });
        }

        if (findEmail?.email === email) {
            return res.json({
                message: "Email já cadastrado!",
            });
        }

        const updateCliente = await clientesModel.updateCliente(id, req.body);

        if (updateCliente.affectedRows === 0) {
            return res.json({
                message: "Não foi possível realizar a atualização!",
            });
        }

        return res.json({
            message: "Cadastro realizado com Sucesso!",
        });
    }

    async removeCliente(req,res){
        const id = Number(req.params.id);
        const deleteCliente = await clientesModel.deleteCliente(id);

        if (deleteCliente.affectedRows === 0) {
            return res.json({
                message: "Não foi possível realizar a exclusão!",
            });
        }
        return res.json({
            message: "Cadastro excluído com Sucesso!",
        });
    }
}