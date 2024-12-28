"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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


import { motion } from "framer-motion";
const Contact = () => {
    return <motion.section initial={{opacity: 0 }}
    animate={{opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},}} className="py-6">
        <div clasName="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> 
                        <h3 className="text-4xl text-accent">Lets Work Together</h3>
                        </form>
                        <p className="text-white/60">Lorem, ipsum</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="First Name" />
                            <Input type="lastname" placeholder="Last Name" />
                            <Input type="email" placeholder="Email" />
                            <Input type="phone" placeholder="Phone" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                        </Select>
                        <Textarea className="h-[200px]"
                        placeholder="Type your message here."/>
            </div>
            <Button size="md" className="max-w-40">Send Message</Button>
            <div className="flex-1 flex itmes-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">{info.map((item, index)=>{
                    return (
                        <li key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.description}</h3>
                            </div>
                        </li>
                    )
                })}</ul>
            </div>
            </div>
        </div>
    </motion.section>;
};

export default Contact;