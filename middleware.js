import { NextResponse } from "next/server";
import logOut from "./lib/logout";
import supabase from "./lib/clientSupaBase";

export async function middleware(request) {
   const home = new URL("/", request.url);
   if (request.cookies.has("session")) {
      let cookie = request.cookies.get("session");
      const { access_token, expires_at } = JSON.parse(cookie.value);
      const { data: { user } } = await supabase.auth.getUser(access_token)
      if (user) {
         const expiresAtDate = new Date(expires_at * 1000); // Multiplica por 1000 para convertir segundos a milisegundos
         const now = new Date();
         if (expiresAtDate < now) {
            logOut();
            return NextResponse.redirect(home.href);
         }
      } else {
         logOut();
         return NextResponse.redirect(home.href);
      }
   } else {
      return NextResponse.redirect(home.href);
   }

   return NextResponse.next();
}

export const config = {
   matcher: [
      "/api/auth/signup",
      "/api/auth/logout",
      "/api/createArticle",
      "/api/uploadFileCkeditor",
      "/admin",
      "/signup",
   ],
};
