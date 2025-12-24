import Accommodations from "./components/accommodation";
import Activities from "./components/activity";
import BikeBanner from "./components/bikebanner";
import CabBanner from "./components/cabbanner";
import Culture from "./components/culture";
import Destinations from "./components/destination";
import Gallery from "./components/gallery";
import HomeHero from "./components/hero";
import Testimonials from "./components/testimonial";
import TravelTips from "./components/traveltips";


export default function Home(){

    return (
        <>
        <HomeHero></HomeHero>
        <Destinations></Destinations>
        <Activities></Activities>
        <Accommodations></Accommodations>
        <CabBanner></CabBanner>
        <Culture></Culture>
        <BikeBanner></BikeBanner>
        <Testimonials></Testimonials>
        <TravelTips></TravelTips>
        <Gallery></Gallery>
        </>
    )
}