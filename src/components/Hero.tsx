import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage:
                        "url('https://sdmntpreastus2.oaiusercontent.com/files/00000000-28f4-61f6-a985-279e23f7842c/raw?se=2025-04-11T03%3A27%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=7fed5391-247d-5f05-8111-11d67d7142ad&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-10T14%3A22%3A32Z&ske=2025-04-11T14%3A22%3A32Z&sks=b&skv=2024-08-04&sig=BdUUUo7yRCPN70PBg3KjMQUm0lBas9usQZS3sbYWZg4%3D')",
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
