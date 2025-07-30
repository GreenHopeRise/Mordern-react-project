import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react"
import { fadeIn } from "../utils/motion";
const Footer = () => {
    return (
        <motion.footer variants={fadeIn('up',0.6)}
            initial="hidden"
            whileInView="show" className="ax-w-7xl mx-auto px-4 py-16 justify-around footer sm:footer-horizontal bg-black text-neutral-content p-10 text-xl ">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </motion.footer>
    );
};

export default Footer;
