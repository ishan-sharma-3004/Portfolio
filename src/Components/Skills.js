import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import { exp } from "../data";

export default function Skills(){
    return (
        <section id="Skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="sm:text-4xl text-3xl font-medium title-font text-white mb-4"/>
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                            Skills &amp; Technologies
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">

                        </p>
                </div>
                <div className="flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {exp.map((skill,index)=>(
                        <div key={Skills} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0 mr-4"/>
                        <span className="title-font font-medium text-white">
                            {skill.title}
                        </span>
                        </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    );
}