import supabase from "@/lib/clientSupaBase";

const handdler = async (req, res) => {
    if (req.method === "GET") {
        const { id } = req.query;
        let { data, error } = await supabase
            .from('Articles')
            .select('*')
            .eq('id', id)

        if (error) {
            res.status(500).json({
                message: "Error on request",
                code: 500,
                error: error,
                data: ""
            })
        }
        if (data) {
            res.status(200).json({
                message: "Ok",
                code: 200,
                error: "",
                data: data
            })
        }
    } else {
        res.status(405).json({
            message: "method not allowed",
            code: 405,
            error: "",
            data: ""
        })
    }
}

export default handdler;