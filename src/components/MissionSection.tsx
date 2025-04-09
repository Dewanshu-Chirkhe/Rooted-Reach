import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MissionSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-modern-surface to-modern-background/50">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="transform transition-all duration-500 hover:scale-[1.02]">
                        <img
                            src="https://media.istockphoto.com/id/626856916/photo/cute-little-girl-with-painted-hands.webp?a=1&b=1&s=612x612&w=0&k=20&c=lVXHOZ2rUDkmlVw4xQAbcwsfKRYC-t7bwI4uboOS0fk="
                            alt="Children making crafts"
                            className="rounded-xl shadow-modern w-full h-auto object-cover aspect-[4/3] border border-modern-border"
                        />
                    </div>

                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-bold mb-6 text-modern-text relative inline-block">
                            Our Mission
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-modern-primary rounded-full"></span>
                        </h2>
                        <p className="text-modern-text/80 mb-4 leading-relaxed text-lg">
                            At Rooted Reach, we believe in the transformative
                            power of creativity. Our mission is to provide
                            mentally challenged children a platform to showcase
                            their talents and craftsmanship.
                        </p>
                        <p className="text-modern-text/80 mb-8 leading-relaxed text-lg">
                            Every purchase you make directly supports these
                            gifted children, helping build their confidence,
                            skills, and sense of accomplishment. Together, we're
                            creating opportunities and changing lives.
                        </p>
                        <Link to="/about">
                            <Button className="btn-primary">
                                About Our Work
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
