import supabase from "@/lib/clientSupaBase"; // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
   if (req.method === "POST") {
      const { email, password } = req.body;
      const { data, error } = await supabase.auth.signInWithPassword({
         email: email,
         password: password,
         options: {
            redirectTo: "http://localhost:3000/",
         },
      });

      if (error) {
         res.status(500).json({ error: error });
      } else {
         res.status(200).json({ message: data });
      }
   } else {
      res.status(405).json({ message: "Method not allowed" });
   }
}
