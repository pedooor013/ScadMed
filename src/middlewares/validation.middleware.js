import { clientIdSchema } from "../schema/client.schema.js";

const validate = (schema) => (req, res, next) =>{
    try{
        schema.parse(req.body);
        next();
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const validateClientId = (req, res, next) => {
    try{
        const clientId = +req.params.id;
        userIdSchema.parse({clientId: clientId});
        next();
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export {validate, validateClientId}