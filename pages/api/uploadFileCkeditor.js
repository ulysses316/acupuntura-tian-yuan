/**
 * Handles an HTTP request to upload an image file to a storage service using Supabase.
 * Returns a JSON response.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Object} - The JSON response with a status code of 200 and a data property containing the string "image".
 */
import supabase from "@/lib/clientSupaBase";
import fs from "fs";
import image from "@/public/diplomados/20231024-acupuntura-1.jpg";
import slugify from "slugify";
import { DateTime } from "luxon";

const handler = async (req, res) => {
   const { data, error } = await supabase.storage
      .from("articulos")
      .upload(slugify(`${DateTime.utc().toISO()}-article.png`, { lower: true }), image, {
         cacheControl: "3600",
         upsert: true,
         contentType: "image/jpg",
      });
   res.status(200).json({ data: "image" });
};

export default handler;
