import { Navbar } from "@/components/Navbar";
import OrderPage from "@/components/OrderPage";
import Footer from "@/components/Footer";

export default function order(){
  return (
    <>
    <main className="flex flex-col">
      <Navbar />
      <OrderPage/>
      <Footer />
    </main>
    </>
  )
}