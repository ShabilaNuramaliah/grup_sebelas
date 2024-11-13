import { Navbar } from "@/components/Navbar";
import CarDetail from "@/components/detail";
import Footer from "@/components/Footer";

export default function CarDetaill (){
  return (
    <>
    <main className="flex flex-col">
      <Navbar />
      <CarDetail/>
      <Footer />
    </main>
    </>
  )
}