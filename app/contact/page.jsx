"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+1(650)480-0882",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "ishu.ishan3004@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        value: "Pleasanton, CA - 94566, USA",
    },
];

const Contact = () => {
    const handleSendMessage = () => {
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const mailtoLink = `mailto:ishu.ishan3004@gmail.com?subject=Contact Form Submission from ${firstName} ${lastName}&body=Name: ${firstName} ${lastName}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;

        window.location.href = mailtoLink;
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">Please fill out the form below to get in touch.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input id="firstname" type="text" placeholder="First Name" />
                                <Input id="lastname" type="text" placeholder="Last Name" />
                                <Input id="email" type="email" placeholder="Email" />
                                <Input id="phone" type="tel" placeholder="Phone" />
                            </div>
                            <Textarea
                                id="message"
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            <Button
                                size="md"
                                className="max-w-40"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevents form submission
                                    handleSendMessage();
                                }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info && Array.isArray(info) && info.length > 0 ? (
                                info.map((item, index) => (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.value}</h3>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p>No contact information available.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
