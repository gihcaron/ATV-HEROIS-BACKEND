const express = require("express");
const router = express.Router();
const heroisController = require("../controllers/heroisController");
const upload = require("../config/upload.js"); 
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);

router.get("/", heroisController.getHerois);
router.get("/:id", heroisController.getHeroi);
router.post("/", upload.single("photo"), heroisController.createHeroi);
router.put("/:id", heroisController.updateHeroi);
router.delete("/:id", heroisController.deleteHeroi);

module.exports = router;
