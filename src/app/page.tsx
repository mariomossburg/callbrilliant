import Hero from "./_components/Hero";
import CardGrid from "./_components/card-grid";

export default function Index() {

  return (
    <main>
      <div className="p-4 ">
        <Hero />
        <div className="text-center text-lg p-4 divider">What our customers say</div>
        <CardGrid />
      </div>
    </main>
  );
}
