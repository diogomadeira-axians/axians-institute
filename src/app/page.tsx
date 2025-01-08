import Contacts from "@/features/home/contacts";
import LatestCourses from "@/features/home/courses";
import HeroSection from "@/features/home/hero-section";
import MapSection from "@/features/home/svg-map";

export default function HomePage() {
  return (
    <div className="container mx-auto py-16 space-y-4">
      <HeroSection />
      <MapSection />
      <LatestCourses />
      <Contacts />
    </div>
  );
}
