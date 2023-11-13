import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import MainCarousel from "@/components/carouseles/MainCarousel";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import Map from "@/components/common/Map";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardCarousel from "@/components/carouseles/CardCarousel";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
   return (
      <>
         <Head>
            <title>Centro de terapias y acupuntura Tian Yuan</title>
            <meta name="description" content="Descubre el equilibrio y bienestar en Tian Yuan, tu destino para terapias y acupuntura. Nuestros expertos en salud te guiarán hacia una vida más armoniosa. Ofrecemos tratamientos personalizados que integran antiguas prácticas de acupuntura con enfoques terapéuticos modernos. ¡Encuentra alivio y restaura tu energía vital en Tian Yuan hoy!" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Inicio | Terapias TianYuan" />
            <meta property="og:description" content="Descubre el equilibrio y bienestar en Tian Yuan, tu destino para terapias y acupuntura. Nuestros expertos en salud te guiarán hacia una vida más armoniosa. Ofrecemos tratamientos personalizados que integran antiguas prácticas de acupuntura con enfoques terapéuticos modernos. ¡Encuentra alivio y restaura tu energía vital en Tian Yuan hoy!" />
            <meta property="og:image" content="/logo.png" />

            <meta name="twitter:title" content="Inicio | Terapias TianYuan" />
            <meta name="twitter:description" content="Descubre el equilibrio y bienestar en Tian Yuan, tu destino para terapias y acupuntura. Nuestros expertos en salud te guiarán hacia una vida más armoniosa. Ofrecemos tratamientos personalizados que integran antiguas prácticas de acupuntura con enfoques terapéuticos modernos. ¡Encuentra alivio y restaura tu energía vital en Tian Yuan hoy!" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:widgets:new-embed-design" content="on" />
            <meta name="twitter:image:src" content="/logo.png" />
         </Head>

         <Navbar />
         <section className="sm:container sm:mx-auto sm:px-0">
            <MainCarousel />
         </section>
         <MainLayout>
            <WhatsAppWidget />
            <h2 className="text-center py-12 text-3xl font-bold">Nuestros Servicios más populares</h2>
            <CardCarousel />
            <h2 className="text-center py-12 text-3xl font-bold">Visita nuestras instalaciones</h2>
            <Map className="h-96 w-full" />
         </MainLayout>
         <Footer />
      </>
   );
}
