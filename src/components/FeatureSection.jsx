import React from "react";
import { motion, scale } from "motion/react";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
const FeatureSection = () => {
    const features = [
        {
            icon: "🔍",
            title: "Find out what you need",
            description:
                "We present you a proposal and discuss nitty-gritty like",
        },
        {
            icon: "⚙️",
            title: "Work out the details",
            description: "Communication protocols apart from engagement models",
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            {/* heading text  */}
            <div className="text-center mb-16">
                <motion.h2
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl font-bold mb-4"
                >
                    How can we help your business?
                </motion.h2>
                <motion.p
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-600"
                >
                    When you resell besnik, you build trust and increase
                </motion.p>
            </div>

            {/* features box  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex text-center flex-col items-center p-6"
                    >
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            className="w-24 h-24 rounded-full  mb-6 flex items-center justify-center"
                            style={{
                                backgroundColor:
                                    index === 0
                                        ? "#F1EFFD"
                                        : index === 1
                                        ? "#FEE7E7"
                                        : "#FFF3E4",
                            }}
                        >
                            <div className="text-3xl">{feature.icon}</div>
                        </motion.div>

                        <motion.h3 
                        variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView="show"
                        className="text-2xl font-medium mb-3 ">
                            {feature.title}
                        </motion.h3>
                        <motion.p 
                        variants={fadeIn('down',0.3)}
            initial="hidden"
            whileInView="show"
                        className="text-gray-500 text-center">
                            {feature.description}
                        </motion.p>
                    </div>
                ))}
            </div>

            {/* button  */}
            <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView="show"
                className="text-center mt-12"
            >
                <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-blue-600/50 shadow-2xl">
                    Become a Partner
                </button>
            </motion.div>
        </section>
    );
};

export default FeatureSection;
