import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import MainCarousel from "@/components/carouseles/MainCarousel";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import Map from "@/components/common/Map";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardCarousel from "@/components/carouseles/CardCarousel";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
   return (
      <>
         <Navbar />
         <MainCarousel />
         <MainLayout>
            <WhatsAppWidget />
            <h2 className="text-center py-12 text-3xl font-bold">Nuestros Servicios más populares</h2>
            <CardCarousel/>
            <h2 className="text-center py-12 text-3xl font-bold">Visita nuestras instalaciones</h2>
            <Map className="h-96 w-full" />
         </MainLayout>
         <Footer />
      </>
   );
}
