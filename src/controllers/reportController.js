const PDFDocument = require("pdfkit");

const editoraModel = require("../models/editoraModel");

const exporteditoraPDF = async (req, res) => {
    try {
        console.log("---");
        const editoras = await editoraModel.getEditoras();

        console.log(editoras);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=editoras.pdf");
        
        const doc = new PDFDocument();
        doc.pipe(res);

        // Título do PDF
        doc.fontSize(20).text("Relatório de Editoras", { align: "center" });
        doc.moveDown();

        // Cabeçalhos da tabela
        doc.fontSize(12).text ("Nome", {underline: true});
        doc.moveDown(0.5);

        // Add dados dos bruxos
        editoras.forEach((editora) => {
            doc.text(
                `${editora.nome}`);
        });
        doc.end();

    } catch (error) {
        res.status(500).json({message: "Erro ao gerar o PDF"});
    }
};

module.exports = {exporteditoraPDF };