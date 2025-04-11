import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/images/BGimage.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                        Handcrafted with{" "}
                        <span className="text-terracotta">Love</span> and{" "}
                        <span className="text-sage">Purpose</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Discover beautiful crafts made by mentally challenged
                        children. Each purchase supports their growth,
                        confidence, and independence.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/products">
                            <Button className="btn-primary text-base px-6 py-3">
                                Shop Now
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button
                                variant="outline"
                                className="text-base px-6 py-3 border-white text-black hover:bg-white/10"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
