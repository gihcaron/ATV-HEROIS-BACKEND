const heroiModel = require('../models/heroiModel');



const getHerois = async (req, res) => {
    try {
        const { nome } = req.query;
        const herois = await heroiModel.getHerois(nome);
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herois." });
    }
};

const getHeroi = async (req, res) => {
    try {
        const heroi = await heroiModel.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(heroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heroi." });
    }
};

const createHeroi = async (req, res) => {
    try {
        const { nome, editoras_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHeroi = await heroiModel.createHeroi(nome, editoras_id, photo);
        res.status(201).json(newHeroi);
    } catch (error) {
     console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Heroi já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar heroi." });
    }

};

const updateHeroi = async (req, res) => {
    try {
        const { nome, editoras_id } = req.body;
        const updateHeroi = await heroiModel.updateHeroi(req.params.id, nome, editoras_id);
        if (!updateHeroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(updateHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar heroi." });
    }
}

const  deleteHeroi = async (req, res) => {
    try {
        const message = await heroiModel.deleteHeroi(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar heroi." });
    }
};

module.exports = { getHerois, getHeroi, createHeroi, updateHeroi,  deleteHeroi};