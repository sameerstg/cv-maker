'use client'
import { useEffect, useState } from "react";

import { workHistory } from "@/static/forms"
import Form, { form } from "./Form";
import InputField from "./InputField";
import { Data } from "@/models/data";
// import { Data, getData } from "@/app/create/page";

function ExperienceAdd(props: any) {
    const [experience, setExperience] = useState<form[]>([]);

    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {

        if (data.length == 0) {
            if (props.data?.value != null) {

                for (let index = 0; index < props.data.value.length; index++) {
                    addExperience()
                    console.log("adding exp")

                }
                setData(props.data?.value)
            }
            else {
                console.log("no data")
                addExperience()
            }
        }
        console.log(data)
        // if (data.length > 0)
        //     props.onValueChanged("Experience", data)

    }, [data])

    function addExperienceButton(b: any) {
        b.preventDefault();
        addExperience();
    }
    function addExperience() {

        setExperience([...experience, workHistory])
    }
    function removeExperience(e: any, index: number) {
        e.preventDefault();
        setExperience(experience.filter((_, idx) => idx !== index));
    }
    function onValueChange(key: string, value: any) {
        if (key !== "" && value != undefined) {

            const index = data.findIndex(item => item.key === key);

            if (index !== -1) {
                const newData = data;
                data[index].value = value
                setData(newData);
            } else {
                setData(data => [...data, { key, value }]);
            }

        }
        // console.log(data)
        if (data?.length <= 0) return;
        props.onValueChanged("Experience", data)
        props.onValueChanged("Experience", data)
    }

    return (
        <div className='flex flex-col  justify-center w-full mx-auto gap-8 my-4'>
            <div className="w-full mx-auto">
                <button className="bg-slate-800 p-2 text-center " onClick={addExperienceButton}>Add More Experience</button>
            </div>
            <div className="flex gap-2 flex-wrap md:justify-center w-full">
                {
                    experience.map((form, key) => (


                        <Experience data={data ? data[key] : []} onValueChange={onValueChange} form={form} removeExperience={removeExperience} key={key} index={key} />


                    ))


                }
            </div>
        </div>
    )
}
function Experience(props: any) {
    const [data, setData] = useState<Data[]>([]);



    useEffect(() => {
        if (props.data?.value) {
            setData(props.data.value)
            console.log(data)
            console.log(data[0]?.value)
        }
    }, [data])
    function onValueChange(key: string, value: string) {
        if (key !== "" && value !== "") {
            const index = data.findIndex(item => item.key === key);

            if (index !== -1) {
                const newData = data;
                data[index].value = value
                setData(newData);
            } else {
                setData(data => [...data, { key, value }]);
            }
        }
        props.onValueChange(props.index, data)
    }
    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 px-2 gap-2 border p-5">

                {
                    props.form.fieldsWithType.map((field: any, key2: number) => (


                        <div key={key2} >

                            {
                                field.textArea ?
                                    <div className="w-full md:col-span-2" >
                                        {
                                            <InputField data={data[key2]?.value} onValueChange={onValueChange} title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />
                                        }
                                    </div>
                                    :
                                    <div className="w-full">
                                        {

                                            <InputField data={data[key2]?.value } onValueChange={onValueChange} title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />
                                        }

                                    </div>
                            }


                        </div>

                    ))



                }

            </div>
            <button className="bg-slate-800 p-2 text-center " onClick={(e) => props.removeExperience(e, props.index)}>Remove</button>

        </div>)
}
export default ExperienceAdd