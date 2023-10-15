import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/common/buttons/Button";
import Navbar from "@/components/common/Navbar";
import MainCarousel from "@/components/carouseles/MainCarousel";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import Map from "@/components/common/Map";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import Tabs from "@/components/common/elements/Tabs";
import CardBody from "@/components/common/cards/CardBody";
import CardServices from "@/components/common/cards/CardServices";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Navbar />
         <MainCarousel />
         <MainLayout>
            <WhatsAppWidget />
            {/* <Tabs /> */}

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 my-16 justify-center">
               <CardBody>
                  <CardServices />
               </CardBody>
               <CardBody>
                  <CardServices />
               </CardBody>
               <CardBody>
                  <CardServices />
               </CardBody>
            </div>

            <Map className="h-96 w-full" />
         </MainLayout>
         <Footer />
      </>
   );
}
