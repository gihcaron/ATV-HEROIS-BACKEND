const pool = require("../config/database");

const getEditoras = async (nome) => {
    if (nome) {
    result = await pool.query(
            "SELECT * FROM editoras WHERE nome ILIKE $1",
            [`%${nome}%`]
        );
        return result.rows;
    }
    else {
    result = await pool.query("SELECT * FROM editoras");
    }
    return result.rows;
};

const getEditoraById = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
};

const createEditora = async (nome) => {
    const result = await pool.query(
        "INSERT INTO editoras (nome) VALUES ($1) RETURNING *",
        [nome]
    );
    return result.rows[0];
}

const updateEditora = async (id, nome) => {
    const result = await pool.query(
        "UPDATE editoras SET nome = $1 WHERE id = $2 RETURNING *", 
        [nome, id] 
    );
    return result.rows[0];
};

const deleteEditora = async (id) => { 
    await pool.query("DELETE FROM editoras WHERE id = $1", [id]);
    return { message: "editora deletada com sucesso." };
}
module.exports = { getEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };