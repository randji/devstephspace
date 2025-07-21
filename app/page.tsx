import HeroBanner from "@/components/store/Herobanner";
import Service from "@/components/store/Service";
import ProfileCard from "@/components/store/ProfileCard";
export default function Store() {
  return (
    <main>
      <HeroBanner />
      <Service />
      <ProfileCard />
    </main>
  );
}
