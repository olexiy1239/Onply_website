import Header  from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHero from "@/components/SectionHero";
import SectionFeatures from "@/components/SectionFeatures";
import SectionDemo from "@/components/SectionDemo";
import SectionMarket from "@/components/SectionMarket";
import SectionMonetization from "@/components/SectionMonetization";
import SectionCompetition from "@/components/SectionCompetition";
import SectionRoadmap from "@/components/SectionRoadmap";
import SectionTeam from "@/components/SectionTeam";
import SectionTiers from "@/components/SectionTiers";
import SectionFAQ from "@/components/SectionFAQ";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionFeatures />
        <SectionDemo />
        <SectionMarket />
        <SectionMonetization />
        <SectionCompetition />
        <SectionRoadmap />
        <SectionTeam />
        <SectionTiers />
        <SectionFAQ />
      </main>
      <Footer />
    </>
  );
}
