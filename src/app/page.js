import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import Marq from "@/components/home/Marq";
import Pricing from "@/components/home/Pricing";
import Statistics from "@/components/home/Statistics";



export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <Marq />
      <Featured />
      <Statistics />
      <Pricing />
    </div>
  );
}
