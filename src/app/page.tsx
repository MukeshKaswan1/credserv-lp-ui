import HeroSection from "./(credserv)/home";
import EmpoweringSection from "./(credserv)/home/empowering";
import ImpactSection from "./(credserv)/home/impact";
import ProblemSection from "./(credserv)/home/problem";
import SolutionSection from "./(credserv)/home/solution";
import ProcessFlowSection from "./(credserv)/home/working";
import FAQSection from "./(credserv)/home/faq-section";
import Capability from "./(credserv)/home/capability";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <EmpoweringSection />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <Capability />
        <ProcessFlowSection />
        <FAQSection />
      </main>
    </div>
  );
}
