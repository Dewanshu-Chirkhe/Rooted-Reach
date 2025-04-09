import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-modern-background to-modern-surface">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-white">
                <img
                    src="https://img.freepik.com/premium-vector/oak-tree-root-logo-design-tree-with-circle-shape-company-with-tree-icon_297778-761.jpg?w=740"
                    alt="Children creating crafts"
                    className="w-auto h-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container-custom text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                            About Rooted Reach
                        </h1>
                        <p className="text-xl text-black/80 max-w-2xl mx-auto">
                            Empowering mentally challenged children through
                            creativity and craftsmanship
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-16">
                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="section-header">Our Story</h2>
                        <p className="text-modern-text/80 leading-relaxed text-lg">
                            At Rooted Reach, we believe in the power of art,
                            compassion, and inclusivity. Our platform is
                            dedicated to showcasing and selling handmade
                            creations crafted by mentally challenged
                            children—each item a reflection of their creativity,
                            resilience, and unique perspective. In collaboration
                            with NGOs that nurture and teach these young
                            artists, we aim to provide them with a source of
                            income, confidence, and a meaningful connection with
                            the world.
                        </p>
                        <p className="text-modern-text/80 leading-relaxed text-lg">
                            Every purchase not only supports their talent but
                            also helps build a more inclusive and empathetic
                            society. Together, let’s reach deeper roots and
                            wider hearts.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.pexels.com/photos/8422174/pexels-photo-8422174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Art Utility"
                            className="rounded-xl shadow-modern aspect-square object-cover"
                        />
                        <img
                            src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Holding Hands"
                            className="rounded-xl shadow-modern aspect-square object-cover mt-8"
                        />
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-modern-surface rounded-2xl shadow-modern p-12 mb-20">
                    <h2 className="section-header text-center mb-12">
                        Our Mission
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl bg-modern-background/50">
                            <h3 className="text-xl font-semibold mb-4 text-modern-text">
                                Creative Development
                            </h3>
                            <p className="text-modern-text/80">
                                Provide mentally challenged children with
                                opportunities to develop creative skills and
                                express themselves through crafts
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-modern-background/50">
                            <h3 className="text-xl font-semibold mb-4 text-modern-text">
                                Sustainable Platform
                            </h3>
                            <p className="text-modern-text/80">
                                Create a sustainable platform for these children
                                to showcase and sell their creations
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-modern-background/50">
                            <h3 className="text-xl font-semibold mb-4 text-modern-text">
                                Social Impact
                            </h3>
                            <p className="text-modern-text/80">
                                Foster understanding and appreciation in society
                                for the abilities and talents of mentally
                                challenged individuals
                            </p>
                        </div>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Credit Card"
                            className="rounded-xl shadow-modern aspect-square object-cover"
                        />
                        <img
                            src="https://images.pexels.com/photos/3822844/pexels-photo-3822844.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Workshop"
                            className="rounded-xl shadow-modern aspect-square object-cover mt-8"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="section-header">
                            How Your Purchase Helps
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-modern-primary/10 p-2 rounded-lg">
                                    <svg
                                        className="w-6 h-6 text-modern-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-modern-text/80">
                                    Directly supporting the child who created
                                    it, with 80% of proceeds going to the
                                    artisan
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-modern-primary/10 p-2 rounded-lg">
                                    <svg
                                        className="w-6 h-6 text-modern-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        />
                                    </svg>
                                </div>
                                <p className="text-modern-text/80">
                                    Funding our workshops, materials, and
                                    mentorship programs
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-modern-primary/10 p-2 rounded-lg">
                                    <svg
                                        className="w-6 h-6 text-modern-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        />
                                    </svg>
                                </div>
                                <p className="text-modern-text/80">
                                    Helping us expand our reach to more children
                                    who can benefit from our programs
                                </p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <Link to="/products">
                                <Button className="btn-primary">
                                    Shop Our Crafts
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
