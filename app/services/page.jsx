"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {num: '01',
    title: 'Machine Learning',
    description: 'I possess strong proficiency in various machine learning and AI algorithms, including classification, regression, clustering, neural networks, and natural language processing. My expertise also includes optimization techniques, deep learning architectures, and leveraging frameworks like TensorFlow, PyTorch, and Keras to implement advanced models effectively.',
    link: "https://www.github.com/ishan-sharma-3004"
    },
    {num: '02',
        title: 'Data Analytics',
        description: 'I have strong proficiency in data analytics, including data preprocessing, exploratory data analysis, and visualization. I am skilled in statistical analysis, predictive modeling, and leveraging tools like Python, SQL, Tableau, and Excel to extract actionable insights from complex datasets and drive data-driven decision-making.',
        link: "https://www.github.com/ishan-sharma-3004"
    },
    {num: '03',
        title: 'Full Stack',
        description: 'I possess comprehensive expertise in full-stack development, with proficiency in both front-end and back-end technologies. On the front-end, I have experience using React, JavaScript, Figma, HTML, and CSS to create dynamic, user-friendly interfaces. On the back-end, I am skilled in working with frameworks and technologies like Node.js, Express, and Python, as well as database management with SQL and NoSQL databases. Additionally, I have a solid understanding of version control systems (Git), RESTful API design, and cloud services, enabling me to build and deploy scalable, high-performance web applications.',
        link: "https://www.github.com/ishan-sharma-3004"
    },
    {num: '04',
        title: 'Software Testing',
        description: 'I have a strong foundation in software testing, with hands-on experience in both manual and automated testing methodologies. I am proficient in designing test cases, performing functional, regression, and performance testing, and using tools such as Pytest, Simulink, Selenium, and TestNG for automation. I also have experience with continuous integration/continuous deployment (CI/CD) pipelines, ensuring seamless integration of testing within development cycles. Additionally, I am skilled in analyzing test results, identifying bugs, and collaborating with development teams to ensure high-quality, reliable software products.',
        link: "https://www.github.com/ishan-sharma-3004"
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4 , ease: "easeInOut"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                   {services.map((service, index) => {
                    return (
                        <div key={index}
                        className="flex-1 flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                {service.num}
                            </div>
                            <Link href={service.link}
                            className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        <p className="border-b border-white/20 w-full">{service.description}</p>
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                );
            })} 
        </motion.div>
    </div>        
</section>
);
};

export default Services;