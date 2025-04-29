const editoraModel = require('../models/editoraModel');

const getEditoras = async (req, res) => {
    try {
        const { nome } = req.query;
        const editoras = await editoraModel.getEditoras(nome);
        res.json(editoras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Editoras." });
    }
};

const getEditora = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const createEditora = async (req, res) => {
    try {
        const { nome } = req.body;
        const newEditora = await editoraModel.createEditora(nome);
        res.status(201).json(newEditora);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Editora já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar Editora." });
    }
''
};

const updateEditora = async (req, res) => {
    try {
        const { nome } = req.body;
        const updateEditora = await editoraModel.updateEditora(req.params.id, nome);
        if (!updateEditora) {
            return res.status(404).json({ message: "Editora não encontrado." });
        }
        res.json(updateEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
}

const  deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel. deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

module.exports = { getEditoras, getEditora, createEditora, updateEditora,  deleteEditora};