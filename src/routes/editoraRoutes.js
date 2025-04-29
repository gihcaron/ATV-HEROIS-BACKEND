const express = require("express");
const router = express.Router();
const editorasController = require("../controllers/editorasController");
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);

router.get("/", editorasController.getEditoras);
router.get("/:id", editorasController.getEditora);
router.post("/", editorasController.createEditora);
router.put("/:id", editorasController.updateEditora);
router.delete("/:id", editorasController.deleteEditora);

module.exports = router;
