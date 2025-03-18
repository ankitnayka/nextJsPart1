import MusicSchoolTestimonials from "@/components/Cards";
import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnimatedWave from "@/components/AnimatedWave";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses />
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpComingWebinar/>
      <AnimatedWave/>
      <Footer/>
    </main>
  );
}
