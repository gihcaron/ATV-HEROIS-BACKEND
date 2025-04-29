const PDFDocument = require("pdfkit");

const heroiModel = require("../models/heroiModel");

const exportHeroiPDF = async (req, res) => {
    try {
        console.log("---");
        const herois = await heroiModel.getHerois();

        console.log(herois);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=herois.pdf");
        
        const doc = new PDFDocument();
        doc.pipe(res);

        // Título do PDF
        doc.fontSize(24).font("Helvetica-Bold").text("Relatório de Herois e herois", { align: "center" });
        doc.moveDown(1);

        // Subtítulo
        doc.fontSize(16).font("Helvetica").text("Lista de heróis cadastrados no sistema", { align: "center" });
        doc.moveDown(1);


        // Cabeçalhos da tabela
        doc.fontSize(12).font("Helvetica-Bold").text ("Nome", {underline: true});
        doc.fontSize(12).font("Helvetica").text ("heroi", {underline: true});
        doc.text("Foto (URL)", { underline: true });
        doc.moveDown(0.5);


        herois.forEach((heroi) => {
            doc.text(`Nome: ${heroi.nome}`);
            doc.text(`heroi: ${heroi.heroi_nome}`);
            doc.text(`Foto: ${heroi.photo || "Sem foto"}`);
            doc.moveDown(0.5);

          // Linha divisória entre os heróis
          doc.moveTo(40, doc.y).lineTo(550, doc.y).strokeColor("#cccccc").stroke();
          doc.moveDown(1);

        });
        doc.end();
    } catch (error) {
        res.status(500).json({message: "Erro ao gerar o PDF"});
    }
};

module.exports = {exportHeroiPDF };