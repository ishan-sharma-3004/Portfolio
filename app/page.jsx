import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span>Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I am <br /> <span className="text-accent">Ishan Sharma</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <a 
                                href="https://drive.google.com/file/d/1jLPOaIN-H2XlcpDns_AdMJ3RlgBQhQX6/view?usp=sharing" // Replace with the actual path to your resume
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="uppercase flex items-center gap-2 text-base bg-base border border-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 px-4 py-2 rounded-md"
                            >
                                <FiDownload className="text-xl" />
                                <span>Download CV</span>
                            </a>
                            <div className="mb-8 xl:mb-0">
                                <Social 
                                    containerStyles="flex gap-6" 
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0"> 
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;