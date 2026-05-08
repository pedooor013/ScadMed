import {authMiddleware} from "../middlewares/auth.middleware.js";
import {loginService} from "../service/auth.service.js";
import clientService from "../service/client.service.js";

async function createClientController(req, res){
    const newClient = req.body;

    try{
        const token = await clientService.createClientService(newUser);
        res.status(201).json({token});
    }catch(err){
        res.status(400).send({message: "Error in create user"});
    }
}

async function loginClientController(req, res){
    const {email, password}  = req.body;
    
    try{
        const token = await loginService(email, password);
        res.status(201).json({token});
    }catch(err){
        res.status(400).send({message: err.message});
    }
}

async function findUserByIdController(req, res){
    const { id } = req.params;

    try{
        const client = await clientService.findClientByIdService(id);
        res.json({user});
    }catch(err){
        res.status(400).send({message: err.message});
    }
}

export default {
    createClientController,
    loginClientController,
    findUserByIdController
}