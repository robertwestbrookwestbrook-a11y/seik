import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import Teepin from "../components/Teepin";
import SkrWheel from "../components/SkrWheel";
import Developers from "../components/Developers";
import Seeker from "../components/Seeker";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";
export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection />
            {/* <VideoSection /> */}
            <Teepin />
            <SkrWheel />
            {/* <Developers /> */}
            <Seeker />
            <PreFooter />
            <Footer />
        </div>
    );
}