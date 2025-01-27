"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderButton  from "@/components/WorkSliderButton";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "Data Analytics",
        title: "Uber analytics",
        description: "",
        stack: [{ name: "Python" }, { name: "R" }, { name: "Shiny" }],
        image: "/UberAnalyticsImage.png",
        github: "https://github.com/ishan-sharma-3004",
    },
    {
        num: "02",
        category: "Machine Learning, Software Testing",
        title: "Integrating YOLO-NAS with OMRON-T25 Arm",
        description: "Developed and tested an advanced automated control system for robotic arms, leveraging ROS, Python, and CMocka. The system integrates cutting-edge motion control algorithms with YOLO-NAS for real-time image recognition, ensuring precise and repeatable movements. Extensive SIL and HIL testing, utilizing Simulink and BATLAB, validated firmware updates and maintained system reliability. Employed pytest for seamless integration testing across components, optimizing interaction between image recognition and control systems, and enhancing operational efficiency.",
        stack: [{ name: "ROS" }, { name: "Python" }, { name: "Pytest" }, { name: "C++" }],
        image: "/Screenshot 2025-01-25 at 12.26.48 AM.png",
        github: "",
    },
    {
        num: "03",
        category: "Frontend",
        title: "Lyft App Frontend",
        description: "Designed and developed a Figma prototype for the Lyft app, introducing key features like Teen Ride Scheduling, Friend Riders, and Parcel Delivery to improve user engagement. Led user research to create interactive, intuitive designs addressing diverse needs, boosting market appeal. Focused on streamlining user workflows and enhancing app usability, with the goal of expanding Lyft’s customer base and increasing service versatility.",
        stack: [{ name: "Figma" }, { name: "User Research" }, { name: "UI/UX Design" }],
        image: "/ScrumApp.png",
        github: "",
    },
    {
        num: "04",
        category: "Full-Stack",
        title: "Scrumdinger App",
        description: "Developed a robust Scrum App in Swift to streamline agile project management, enabling teams to track sprints, backlogs, and user stories with ease. Integrated key features such as task assignment, sprint progress tracking, and burndown charts to enhance team collaboration and productivity. The app allows users to visualize workflow, track deadlines, and adjust priorities, optimizing the Scrum framework for mobile devices and improving project delivery efficiency.",
        stack: [{ name: "Swift" }, { name: "SwiftUI" }, { name: "Core Data" }, { name: "Swift" }],
        image: "/LyftResumeImag.png",
        github: "https://github.com/ishan-sharma-3004/Scrum-App",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-xl text-accent"
                                    >
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt={project.title}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderButton containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
