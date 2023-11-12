/**
 * Handles a POST request to create an article.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
import supabase from "@/lib/clientSupaBase";

const handler = async (req, res) => {
   const { title, body, active, slug } = req.body;
   if (req.method === "POST") {
      const { data, error } = await supabase
         .from("Articles")
         .insert([{ title: title, body: body, public: active, slug: slug }])
         .select();
      res.status(200).json({
         message: "Articulo creado correctamente.",
         data: data,
      });
   } else {
      res.status(405).json({ message: "Metodo no permitido." });
   }
};

export default handler;
