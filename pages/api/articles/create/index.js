import supabase from "@/lib/clientSupaBase";

const handler = async (req, res) => {
   if (req.method === "POST") {
      const { title, body, active, slug } = req.body;
      const { data, error } = await supabase
         .from("Articles")
         .insert([{ title: title, body: body, public: active, slug: slug }])
         .select();
      if (error) {
         res.status(500).json({
            message: "Error on request",
            code: 500,
            error: error,
            data: "",
         });
      }
      if (data) {
         res.status(200).json({
            message: "Ok",
            code: 200,
            error: "",
            data: data,
         });
      }
   } else {
      res.status(405).json({ message: "Metodo no permitido." });
   }
};

export default handler;
