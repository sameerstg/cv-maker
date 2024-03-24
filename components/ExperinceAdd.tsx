'use client'
import { useState } from "react";

import { workHistory } from "@/static/forms"
import Form, { form } from "./Form";
import InputField from "./InputField";

function ExperienceAdd() {
    const [experience, setExperience] = useState<form[]>([workHistory]);


    function addExperienceButton(b: any) {
        b.preventDefault();
        setExperience([...experience, workHistory])
    }
    function removeExperience(e: any, index: number) {
        e.preventDefault();
        setExperience(experience.filter((_, idx) => idx !== index));
    }
    return (
        <div className='flex flex-col  justify-center w-full mx-auto gap-8 my-4'>
            <div className="w-full mx-auto">
                <button className="bg-slate-800 p-2 text-center " onClick={addExperienceButton}>Add More Experience</button>
            </div>
            <div className="flex gap-2 flex-wrap md:justify-center w-full">
                {
                    experience.map((form, key) => (

                        <div key={key} className="w-full">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 px-2 gap-2 border p-5">

                                {
                                    form.fieldsWithType.map((field, key2) => (


                                        <div key={key2} >

                                            {
                                                field.textArea ?
                                                    <div className="w-full md:col-span-2" >
                                                        {
                                                            <InputField title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />
                                                        }
                                                    </div>
                                                    :
                                                    <div className="w-full">
                                                        {

                                                            <InputField title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />
                                                        }

                                                    </div>
                                            }


                                        </div>

                                    ))



                                }

                            </div>
                            <button className="bg-slate-800 p-2 text-center " onClick={(e) => removeExperience(e, key)}>Remove</button>

                        </div>



                    ))


                }
            </div>
        </div>
    )
}

export default ExperienceAdd