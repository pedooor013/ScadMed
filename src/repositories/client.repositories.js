import supabase from "../config/supabase.js"

async function createClientRepository(newClient) {
    const { name, email, password } = newClient;

    const { data, error } = await supabase
        .from('usuarios_cliente')
        .insert({ nome: name, email: email, senha: password })
        .select();

    if (error) throw error;
    return data[0];
}

async function findClientByEmailRepository(email) {
    const { data, error } = await supabase
        .from('usuarios_cliente')
        .select('id, nome , email, senha')
        .eq('email', email);

    if (error) throw error;
    return data[0] || null;
}

async function findClientByIdRepository(id) {
    const { data, error } = await supabase
        .from('usuarios_cliente')
        .select('id, nome, email')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data;
}

export default {
    createClientRepository,
    findClientByEmailRepository,
    findClientByIdRepository 
}