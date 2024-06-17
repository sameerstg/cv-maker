'use client'
import { Data, getData } from "@/app/create/page";
import { useEffect, useState } from "react";


interface props {
    data: Data[];
    onValueChanged: any;
}
function SkillsAdd(props: props) {
    const [skills, setSkills] = useState<string[]>([]);
    useEffect(() => {

        var newData = getData(props.data, "Skills")
        if (newData?.value != null) {

            setSkills(newData.value);
            console.log(newData)
            // props.onValueChanged("Skills", newData)
        }




    }, [])

    useEffect(() => {
        if(skills.length != 0)
       props.onValueChanged("Skills",skills) 

    }, [skills])
    function addSkill(e: any) {
        
    //   console.log(e) 
    }
    function addSkillButton(b: any) {
        const inputField = document.querySelector(".addSkill") as HTMLInputElement;
        if (inputField.value.trim() !== "") {
            setSkills([...skills, inputField.value]);
            inputField.value = "";
            props.onValueChanged("Skills", skills)

        }
    }
    function removeSkill(index: number) {
        setSkills(skills.filter((_, idx) => idx !== index));
        props.onValueChanged("Skills", skills)
    }

    return (
        <div className='flex flex-col  justify-center  text-center w-full mx-auto gap-8 my-4'>
            <div className='flex items-center  gap-2'>
                <h1>Enter Skill :</h1>
                <input className={"bg-[#262626] px-2 py-1 rounded-lg addSkill"} type="text" placeholder={"eg. Python"} onKeyDown={x=>addSkill} ></input>
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