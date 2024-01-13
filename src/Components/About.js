import React from "react";

export default function About(){
    return (
        <section id="About">
            <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-enter text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Ishan.
                        <br className="hidden lg:inline-block"/>I love to Solve Problems.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Dedicated and efficient Research Engineer offering to support organizational goals with targeted research design and specialized parameters according to leadership. Collaborative team member with extensive experience supporting research design and amending variables to target shifting objectives. I am a systematic statistical analyst proficient in Python programming and problem-solving for multi-dimensional results analysis and hypothesis projection.
                    </p>
                    <div className="flex justify-center">
                        <a 
                        href="/#Contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outine-none hover:bg-green-600 rounded text-lg">
                            Work with Me
                        </a>
                        <br/>
                        <a href="/#Projects"
                        className="ml-4 inline-flex text-gray bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
                        See my past work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img 
                        className="object-cover object-center rounded"
                        alt="coder"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
