import React from "react";
import scheduleImage from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                {/* left  */}
                <div className="md:w-1/2 w-full">
                    <img
                        className="w-full  h-auto"
                        src={scheduleImage}
                        alt="schedule image"
                    />
                </div>

                {/* right  */}
                <div className="md:w-1/2 w-full">
                    <p className="text-orange-500 font-semibold">SCHEDULE</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 ">Streamline Your Business <br /> with Smart Scheduling Solutions</h2>
                    <p className="text-gray-600 mb-8">Take control of your time and boost producivity wit our itelligent scheduling system. Automate appointments, manage team availability, and deliver excptional customer experiences through seamless calender management.</p>
                    <a className="text-blue-500 font-semibold flex   items-center gap-2 hover:gap-4 transition-all " href="#"> Elplore scheduling features <IoIosArrowRoundForward className="size-8" /></a>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
