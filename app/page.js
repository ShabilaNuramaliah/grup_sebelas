import { Navbar } from "@/components/Navbar";
import Dashboard from "@/components/Dash";
import Footer from "@/components/Footer";

export default function Dassboard(){
  return (
    <>
    <main className="flex flex-col">
      <Navbar />
      <Dashboard/>
      <Footer />
    </main>
    </>
  )
}