import AboutSection from "../components/aboutsection";
import CounsellingSection from "../components/CounsellingSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/footer";
import GlobalSection from "../components/GlobalSection";
import Header from "../components/header"
import Hero from "../components/hero"
import PopularCTA from "../components/PopularCTA";
import RealMap from "../components/RealMap";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/teamsection";
import TopUniversitiesSlider from "../components/TopUniversitiesSlider";
import useScrollReveal from "../hooks/useScrollReveal";


const HomePage =()=>{
    useScrollReveal();
    return(
        <>
        <div className="snap-container">
            <Header />

            <div className="snap-section"><Hero /></div>
            <div className="snap-section"><TopUniversitiesSlider /></div>
            <div className="snap-section"><AboutSection /></div>
            <div className="snap-section"><RealMap /></div>
            <div className="snap-section"><GlobalSection /></div>
            <div className="snap-section"><ServicesSection/></div>
            <div className="snap-section"><TeamSection /></div>
            <div className="snap-section"><CounsellingSection /></div>
            <div className="snap-section"><FaqSection /></div>
            <div className="snap-section"><PopularCTA /></div>
            
        </div>
        </>
    )
}
export default HomePage