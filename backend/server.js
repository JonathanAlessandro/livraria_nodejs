import express from "express";
import cors from "cors";
import routeClientes from "./src/routes/clientesRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 9000;

app.use("/clientes", routeClientes);

app.listen(PORT, () => {
    return console.log(`Servidor rodando http://localhost:${PORT}`);
});