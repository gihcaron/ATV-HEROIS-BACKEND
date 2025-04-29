require("dotenv").config();
const express = require("express");
const cors = require("cors");
const editoraRoutes = require("./src/routes/editoraRoutes");
const heroiRoutes = require ("./src/routes/heroiRoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/editoras", editoraRoutes);
app.use("/api/herois", heroiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
