import express from "express";
import clientesController from "../controllers/clientesController.js";

const routeClientes = express.Router();

routeClientes.get("/", clientesController.getAllClientes);
routeClientes.get("/:email", clientesController.clienteByEmail);
routeClientes.post("/", clientesController.storeCliente);
routeClientes.put("/:id", clientesController.updateClienteById);
routeClientes.delete("/:id", clientesController.removeCliente);

export default routeClientes;