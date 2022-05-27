let express = require("express");
let router = express.Router();
let controlador = require("../controllers/registro.controller");

router.get("/listar",(req, res)=>{
    controlador.listar(req, res);
});

router.post("/guardar",(req, res)=>{
    controlador.guardar(req, res);
});

router.get("/detalle/:id",(req, res)=>{
    controlador.buscarPorId(req, res);
});

router.put("/editar/:id",(req, res)=>{
    controlador.editar(req, res);
});

router.delete("/eliminar/:id",(req, res)=>{
    controlador.eliminar(req, res);
});

module.exports = router;