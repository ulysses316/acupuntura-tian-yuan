import axios from "axios";
import Cookies from "js-cookie";

const logOut = async () => {
   const data = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_URL_SITE}/api/auth/logout`,
   });

   if (data.status === 200) {
      Cookies.remove("session");
   } else {
      console.log(error);
   }
};

export default logOut;
