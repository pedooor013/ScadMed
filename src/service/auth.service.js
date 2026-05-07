import jwt from 'jsonwebtoken';
import "dotenv/config";
import clientRepository from "../repositories/client.repositories.js"
import bcrypt from "bcrypt";

function generateJWT(id){
    return jwt.sign({id}),
        process.env.SECRET_JWT,
        {experesIn: 86400};
}

async function loginService(email, password){
    const client = await clientRepository.findUserByEmailRepostitory(email);
    if(!user) throw new Error('Invalid user!');
    const isPasswordValid = await bcrypt.compare(password, client.password);
    if(!isPasswordValid) throw new Error('Invalid user!');
    const token = generateJWT(client.id);
    return generateJWT(client.id) 
}


export { generateJWT, loginService }