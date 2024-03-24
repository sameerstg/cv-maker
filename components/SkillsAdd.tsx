'use client'
import { useState } from "react";
function SkillsAdd() {
    const [skills, setSkills] = useState<string[]>([]);

    function addSkill(e: any) {
        // if (e.key !== "Enter") return;
        // const inputField = document.querySelector(".addSkill") as HTMLInputElement;
        // if (inputField.value.trim() !== "") {
        //     setSkills([...skills, inputField.value]);
        //     inputField.value = "";
        // }
    }
    function addSkillButton(b: any) {
        const inputField = document.querySelector(".addSkill") as HTMLInputElement;
        if (inputField.value.trim() !== "") {
            setSkills([...skills, inputField.value]);
            inputField.value = "";
        }
    }
    function removeSkill(index: number) {
        setSkills(skills.filter((_, idx) => idx !== index));
    }
    return (
        <div className='flex flex-col  justify-center  text-center w-full mx-auto gap-8 my-4'>
            <div className='flex items-center  gap-2'>
                <h1>Enter Skill :</h1>
                <input className={"bg-[#262626] px-2 py-1 rounded-lg addSkill"} type="text" placeholder={"eg. Python"} onKeyDown={addSkill} ></input>
                <input className="rounded-md px-2 py-1  bg-[#8a8a8a] text-black" type="button" onClick={addSkillButton} value="Add" ></input>
            </div>
            <div className="flex gap-2 flex-wrap md:justify-center">
                {
                    skills.map((skill, key) => (
                        <button key={key} onClick={() => removeSkill(key)} className="px-2 py-1 rounded-lg bg-[#262626] hover:bg-red-500 focus:outline-none">
                            {skill}
                        </button>


                    ))
                }
            </div>
        </div>
    )
}

export default SkillsAdd