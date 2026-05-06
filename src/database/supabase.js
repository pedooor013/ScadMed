import { createCliente } from '@supabase/supabase-js'

const supabase = createCliente(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export default supabase;