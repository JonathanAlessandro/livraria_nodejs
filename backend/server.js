import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routeClientes from "./src/routes/clientesRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT_SERVER || 9000;

app.use("/clientes", routeClientes);

app.listen(PORT, () => {
    return console.log(`Servidor rodando http://localhost:${PORT}`);
});