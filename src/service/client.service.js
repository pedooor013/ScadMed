import clientRepository from "../repositories/client.repositories.js";
import bcrypt from "bcrypt";
import { generateJWT } from "./auth.service.js";

async function createClientService(newClient){
    const findClient = await clientRepository.findClientByEmailRepository(newClient.email);
    if(findUser) throw new Error("User already exists!");

    const passHash = await bcrypt.hash(newClient.password, 10);
    const client = await clientRepository.createClientRepository({ 
        ...newClient, 
        password: passHash, 
    })

    if(!client) throw new Error("Error creating client!");

    const token = generateJWT(client.id);
    
    return token;
};

async function findClientByIdService(id){
    const user = await clientRepository.findClientByIdRepository(id);
    if(!user)
        throw new Error("User not found");
    return user;
}

export default {
    createClientService,
    findClientByIdService
}