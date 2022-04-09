import supabase from "../../../services/superbase";
import { v4 as uuidv4 } from "uuid";

//POST /api/auth/nonce

const nonceApi = async (req, res) => {
    const { walletAddr } = req.body
    const nonce = uuidv4();

    let { data, error } = await supabase
        .from('user')
        .select('nonce')
        .eq('walletAddr', walletAddr) 

    if(data.length > 0) {
         let {data, error} = await supabase.from('user').update({ nonce }).match({ walletAddr })
    }
    else {
        let {data, error} = await supabase.from('user').insert({ nonce, walletAddr })
    }
    
    

    if(error) {
        res.status(400).json({ error: error.message })
    } else {
        res.status(200).json({ nonce })
    }
}

export default nonceApi;