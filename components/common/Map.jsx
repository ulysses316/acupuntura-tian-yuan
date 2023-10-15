import React from "react";

export default function Map({className}) {
   return (
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15034.301776530298!2d-99.0506652!3d19.6026814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1b1707c8541%3A0x39bcb6f604c88a98!2sAcupuntura%20y%20terapia%20f%C3%ADsica%20Tian%20Yuan!5e0!3m2!1ses-419!2smx!4v1695452519652!5m2!1ses-419!2smx"
         className={className}
         allowfullscreen=""
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
      />
   );
}
