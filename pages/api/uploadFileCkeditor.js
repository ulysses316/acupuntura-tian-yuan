import formidable from "formidable";
import supabase from "@/lib/clientSupaBase";
import slugify from "slugify";
import * as fs from "fs";

async function saveFormData(files) {
   const image = files.file?.[0];
   const { filepath, newFilename, originalFilename, mimetype } = image;
   const srcToFile = fs.readFileSync(filepath);

   const { data, error } = await supabase.storage
      .from("articulos")
      .upload(`public/${slugify(originalFilename, { lower: true })}`, srcToFile, {
         cacheControl: "3600",
         upsert: false,
         contentType: mimetype,
      });
}

async function handlePostFormReq(req, res) {
   const form = formidable({ multiples: true });
   const formData = new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
         if (err) {
            reject("error");
         }
         resolve({ fields, files });
      });
   });

   const { files } = await formData;

   try {
      await saveFormData(files);
      res.status(200).send({ status: "submitted" });
      return;
   } catch (e) {
      res.status(500).send({ status: "something went wrong", error: e });
      return;
   }
}

const handler = async (req, res) => {
   if (req.method == "POST") {
      await handlePostFormReq(req, res);
   } else {
      res.status(404).send("method not found");
   }
};

export const config = {
   api: {
      bodyParser: false,
   },
};

export default handler;
