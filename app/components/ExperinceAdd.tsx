'use client'
import { useState } from "react";

import { workHistory } from "@/static/forms"
import Form, { form } from "./Form";

function ExperienceAdd() {
    const [experience, setExperience] = useState<form[]>([workHistory]);


    function addExperienceButton(b: any) {
        const inputField = document.querySelector(".addSkill") as HTMLInputElement;
        if (inputField.value.trim() !== "") {
            inputField.value = "";
        }
    }
    function removeExperience(index: number) {
        setExperience(experience.filter((_, idx) => idx !== index));
    }
    return (
        <div className='flex flex-col  justify-center  text-center w-full mx-auto gap-8 my-4'>
            <div className='flex items-center  gap-2'>
                <h1>Add Experience :</h1>
            </div>
            <div className="flex gap-2 flex-wrap md:justify-center">
                {
                    experience.map((form, key) => (


                        <div key={key}>
                        </div>


                    ))


                }
            </div>
        </div>
    )
}

export default ExperienceAdd