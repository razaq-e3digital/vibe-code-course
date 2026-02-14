import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Blueprint from "@/components/Blueprint";
import MindsetShift from "@/components/MindsetShift";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import ModernStack from "@/components/ModernStack";
import Community from "@/components/Community";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Blueprint />
      <MindsetShift />
      <ProjectSpotlight />
      <ModernStack />
      <Community />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
