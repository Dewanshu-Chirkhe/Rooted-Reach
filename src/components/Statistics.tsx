import { motion } from "framer-motion";

const stats = [
    {
        id: 1,
        number: "150+",
        label: "Children Supported",
        description:
            "Mentally challenged children empowered through our programs",
    },
    {
        id: 2,
        number: "500+",
        label: "Products Created",
        description: "Unique handmade items crafted with love and care",
    },
    {
        id: 3,
        number: "80%",
        label: "Proceeds to Artisans",
        description:
            "Direct support to the children who create these beautiful crafts",
    },
    {
        id: 4,
        number: "5",
        label: "Workshops",
        description: "Active craft workshops across different locations",
    },
];

const Statistics = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-modern-surface to-modern-background">
            <div className="container-custom">
                <h2 className="section-header text-center mb-16">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-modern-surface rounded-2xl shadow-modern p-8 text-center"
                        >
                            <h3 className="text-4xl font-bold text-modern-primary mb-4">
                                {stat.number}
                            </h3>
                            <h4 className="text-xl font-semibold text-modern-text mb-2">
                                {stat.label}
                            </h4>
                            <p className="text-modern-text/60">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
