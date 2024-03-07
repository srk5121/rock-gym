import NavBar from "./sections/nav/NavBar";
import Hero from "./sections/hero/Hero";
import Trainer from "./sections/trainer/Trainer";
import Equipment from "./sections/equipment/Equipment";
import Gallery from "./sections/gallery/Gallery";
import Reviews from "./sections/reviews/Reviews";
import Location from "./sections/location/Location";
import Contact from "./sections/contact us/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Trainer />
        <Equipment />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Contact />
    </div>
  );
}

export default App;
