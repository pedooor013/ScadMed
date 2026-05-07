import db from "../config/supabase.js"

function createUserRepository(newClient){
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