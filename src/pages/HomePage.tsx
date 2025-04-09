import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import MissionSection from "@/components/MissionSection";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Hero />
            <div className="py-8 md:py-12">
                <FeaturedProducts />
            </div>
            <MissionSection />
        </div>
    );
};

export default HomePage;
