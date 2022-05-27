let model = require("../models/registro.model");

let controlador = {
    listar(req,res){
        model.find({},(err, result)=>{
            if(err){
                res.sendStatus(500);
            }else{
                res.json(result);
            }
        });
    },
    guardar(req,res){
        const { nombre, tipo, monto } = req.body;
        let dato = new model;
        dato.nombre = nombre;
        dato.tipo = tipo;
        dato.monto = monto;
        dato.save((err, result)=>{
            if(err){
                res.sendStatus(500);
            }else{
                res.json(result);
            }
        });
    },
    buscarPorId(req,res){
        let val_id = req.params.id;
        model.findById(val_id,(err, result)=>{
            if(err){
                res.sendStatus(500);
            }else{
                res.json(result);
            }
        });
    },
    editar(req,res){
        let val_id = req.params.id;
        const { nombre, tipo, monto } = req.body; 
        let datos = { nombre, tipo, monto };
        model.findByIdAndUpdate(val_id, datos, {new:true},(err, result)=>{
            if(err){
                res.sendStatus(500);
            }else{
                res.json(result);
            }
        });
    },
    eliminar(req,res){
        let val_id = req.params.id;
        model.findByIdAndDelete(val_id,(err, result)=>{
            if(err){
                res.sendStatus(500);
            }else{
                res.sendStatus(200);
            }
        }); 
    },
}

module.exports = controlador;