import db from "../config/supabase.js"

function createClientRepository(newClient){
    return new Promise((res, rej) =>{
        const {name, email, password} = newClient;
        db.run(
            `
            INSERT
                INTO usuarios_cliente(nome, email, senha)
                VALUES (?, ?, ?)
            `,
            [name, email, password],
            function(err){
                if(err){
                    rej(err);
                }else{
                    res({id: this.lastID, ...newClient})
                }
            }
        )
    })
}

function findClientByEmailRepository(email){
        return new Promise((res, rej) =>{
            db.run(
                `
                SELECT 
                    id,
                    nome,
                    email,
                    senha
                FROM
                    usuarios_client
                WHERE
                    email = ?
                `,
                [email],
                function(err){
                    if(err){
                        rej(err);
                    }else{
                        res(row);
                    }
                }
            )
        })
}

export default {
    createClientRepository, 
    findClientByEmailRepository
}