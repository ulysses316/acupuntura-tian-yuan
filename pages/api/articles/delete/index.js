import supabase from "@/lib/clientSupaBase";

const handdler = async (req, res) => {
   if (req.method === "DELETE") {
      const { id } = req.body;
      const { error, status } = await supabase.from("Articles").delete().eq("id", id);
      if (error) {
         res.status(500).json({
            message: "Error on request",
            code: 500,
            error: error,
            data: "",
         });
      }
      if (status === 204) {
         res.status(200).json({
            message: "Your article has been deleted.",
            code: 200,
            error: "",
            data: "",
         });
      }
   } else {
      res.status(405).json({
         message: "method not allowed",
         code: 405,
         error: "",
         data: "",
      });
   }
};

export default handdler;
