import Header from "./components/Header/Index"
import PresentationSection from "./components/PresentationSection/Index"
import SpecialitiesSection from "./components/SpecialtiesSection/Index"
//import HowWorksSection from "./components/HowWorksSection/Index"
import RecentWorksSection from "./components/RecentWorksSection/Index"
import AboutMeSection from "./components/AboutMeSection/Index"
import PricingSection from "./components/PricingSection/Index"
import Footer from "./components/Footer/Index"


export default function App() {
  return (
    <>
    <Header />
    <main className="flex flex-col gap-28 items-center">
    <PresentationSection />
    <SpecialitiesSection />
    {/* <HowWorksSection /> */}
    <RecentWorksSection />
    <AboutMeSection />
    <PricingSection />
    </main>
    <Footer></Footer>
    </>
  )
}
