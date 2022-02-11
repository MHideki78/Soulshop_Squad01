const { Router } = require("express");
const CuponController = require("../controllers/CuponController");
const router = Router();

router.get("/cupons", CuponController.paginaCupon);
router.post("/cupon/adicionar", CuponController.addCupon);
router.get("/cupon/novo", CuponController.paginaAdicionarCupon);
router.post("/cupon/atualizar", CuponController.editCupon);
router.get("/cupons/editar/:id", CuponController.paginaEditCupon);
router.post("/cupons/deletar",CuponController.deleteCupon);

module.exports = router