


import DressStyle from "./components/DressStyle/page";
import Hero from "./components/hero/page";
import NewArrival from "./components/NewArrival/page";
import TopSelling from "./components/TopSelling/page";


export default function Home() {
  return (
    <div>
     <Hero />
     <NewArrival />
     <TopSelling />
    <DressStyle />
    
    </div>
  );
}
