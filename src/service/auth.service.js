import jwt from 'jsonwebtoken';
import "dotenv/config";
import clientRepository from "../repositories/client.repositories.js"
import bcrypt from "bcrypt";

function generateJWT(id){
    return jwt.sign({id},
        process.env.SECRET_JWT,
        {expiresIn: 86400});
}

async function loginService(email, password){
    const client = await clientRepository.findClientByEmailRepository(email);
    
    if(!client) throw new Error('Invalid user!');
    const isPasswordValid = await bcrypt.compare(password, client.senha);
    
    if(!isPasswordValid) throw new Error('Invalid user!');
    
    return generateJWT(client.id);
}


export { generateJWT, loginService }