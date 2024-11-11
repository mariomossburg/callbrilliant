import Hero from "./_components/Hero";
import Accordion from "./_components/accordion";
import CardGrid from "./_components/card-grid";

export default function Index() {

  return (
    <main>
      <div className="p-4 ">
        <Hero />
        <div className="text-center text-lg p-4 divider">What our customers say</div>
        <div className="hidden md:block">
        <CardGrid />
        </div>

        <div className="block md:hidden">
        <Accordion />
        </div>
        
      </div>
    </main>
  );
}
