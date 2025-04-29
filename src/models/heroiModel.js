const pool = require("../config/database");

const getHerois = async (nome) => {
    if (nome) {
    result = await pool.query(
        "SELECT herois.*, editoras.nome AS editora_nome FROM herois LEFT JOIN editoras ON herois.editoras_id = editoras.id WHERE herois.nome ILIKE $1",
        [`%${nome}%`]
        );
        return result.rows;
    }
    else {
    result = await pool.query(  "SELECT herois.*, editoras.nome AS editora_nome FROM herois LEFT JOIN editoras ON herois.editoras_id = editoras.id");
    }
    return result.rows;
};

const getHeroiById = async (id) => {
    const result = await pool.query("SELECT * FROM Herois WHERE id = $1", [id]);
    return result.rows[0];
};

const createHeroi = async (nome, editoras_id, photo) => {
    const result = await pool.query(
        "INSERT INTO Herois (nome, editoras_id, photo) VALUES ($1, $2, $3) RETURNING *",
        [nome, editoras_id, photo]
    );
    return result.rows[0];
}

const updateHeroi = async (id, nome, editoras_id) => {
    const result = await pool.query(
        "UPDATE herois SET nome = $1, editoras_id = $2 WHERE id = $3 RETURNING *",
        [nome, editoras_id, id] 
    );
    return result.rows[0];
};

const deleteHeroi = async (id) => { 
    await pool.query("DELETE FROM Herois WHERE id = $1", [id]);
    return { message: "Heroi deletado com sucesso." };
}
module.exports = { getHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };