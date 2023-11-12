import supabase from "@/lib/clientSupaBase"; // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
   const { error } = await supabase.auth.signOut();
   if (error) {
      res.status(500).json({ error: error });
   } else {
      res.status(200).json({ messahe: "Log out successfully" });
   }
}
