  "use client";

  import { FaSwift, FaJs, FaReact, FaPython, FaAws, FaDocker} from "react-icons/fa";
  import { TbFileTypeSql, TbBrandAzure, TbBrandCpp } from "react-icons/tb";
  import { SiPytest, SiKubernetes, SiPytorch, SiKeras, SiApachekafka, SiApacheairflow, SiMongodb } from "react-icons/si";
  import { BiLogoPostgresql } from "react-icons/bi";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { motion } from "framer-motion";

  const about = {
    title: "About Me",
    description: "",
    info: [
      { fieldName: "Name", fieldValue: "Ishan Sharma" },
      { fieldName: "Phone No:", fieldValue: "+1(650)480-0882" },
      { fieldName: "Experience", fieldValue: "1+ years" },
      { fieldName: "Languages Known", fieldValue: "Hindi, English" },
      { fieldName: "Nationality", fieldValue: "Indian" },
      { fieldName: "Email", fieldValue: "ishu.ishan3004@gmail.com" },
    ]
  };

  const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "",
    items: [
      { company: "San Jose State University", position: 'Graduate Research Assistant', duration: 'August 2024 - December 2024' },
      { company: "Zealtech Inc.", position: 'Software Analyst Intern', duration: 'February 2023 - August 2024' },
      { company: "Schneider Electric", position: 'Research and Development Engineer', duration: 'February 2022 - August 2022' },
      { company: "Alpha AI", position: 'Data Scientist Intern', duration: 'June 2021 - August 2021' },
      { company: "Reliance Jio Infocomm", position: 'Software Engineer Intern', duration: 'February 2021 - May 2021' },
    ]
  };

  const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "",
    items: [
      { institution: "San Jose State University", degree: "Masters of Science in Engineering Management", duration: 'January 2023 - December 2024' },
      { institution: "UPES", degree: 'Bachelors of Technology in Computer Science', duration: 'June 2018 - May 2022' },
    ]
  };

  const skills = {
    title: "My Skills",
    description: "",
      skilllist: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' },
        { icon: <FaJs />, name: 'JavaScript' },{ icon: <TbBrandCpp />, name: 'C++' },         // C++ added
        { icon: <FaSwift />, name: 'Swift' },
        //{ icon: <FaCogs />, name: 'Pytest' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaAws />, name: 'AWS' },
        { icon: <TbBrandAzure />, name: 'Microsoft Azure' },
        { icon: <SiApacheairflow />, name: 'Apache Airflow' },
        { icon: <SiApachekafka />, name: 'Apache Kafka' },
        { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
        { icon: <TbFileTypeSql />, name: 'MySQL' },
        { icon: <SiKeras />, name: 'Keras' },
        { icon: <SiMongodb />, name: 'MongoDB' }, // MongoDB added
        { icon: <FaDocker />, name: 'Docker' },  
        //{ icon: <FaJenkins />, name: 'Jenkins' }, // Jenkins added
        {icon: <SiPytest />, name: 'Pytest'},     // Swift added
      ]
  };

  const Resume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            <div className="min-h-[60vh] w-full">
              {/* Experience Tab */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.company}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="h-full w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.institution}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="h-full w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skilllist.map((skill, index) => (
                      <li key={index} className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {/* About Me Tab */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    );
  };

  export default Resume;
