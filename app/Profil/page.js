import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfilePage from "@/components/ProfilePage";

export default function profil() {
  return (
    <>
    <main className="flex flex-col">

      <Navbar />
      <ProfilePage/>
      <Footer />
    </main>
    </>
  );
}
