
import { supabase } from "@/lib/supabaseclient";

export async function GET() {
    const {data, error} = await supabase.from('snacks').select('*');
    
    if(error)
        return Response.json({error: error.message}, {status: 500});

    return Response.json(data);
}