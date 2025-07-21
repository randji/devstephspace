import HeroBanner from "@/components/store/Herobanner";
import Service from "@/components/store/Service";
import { Formule } from "@/components/store/ProfileCard";
export default function Store() {
  return (
    <main>
      <HeroBanner />
      <Service />
      <Formule />
    </main>
  );
}
