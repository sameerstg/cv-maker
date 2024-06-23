'use client'
import InputField from "@/components/InputField";
import { cv, field } from "@/static/forms";
import SkillsAdd from "./SkillsAdd";
import { useEffect, useState } from "react";
import ExperienceAdd from "./ExperinceAdd";
import Link from "next/link";
import { Data, getData } from "../models/data";

export default function Form(props: form) {

  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    onValueChange("", "")
  }, [data]);


  function onValueChange(key: string, value: any) {
    if (key !== "" && value !== "") {

      // Find index of the key in data
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
    props.onValueChange(data)
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();


    if (props.next && props.nextCallback) {
      props.nextCallback(e);
    } else if (props.submitCallback) {
      props.submitCallback(e);
    }
  }
  return (
    <form className="flex w-full flex-col gap-2 justify-center items-start mx-auto my-4" onSubmit={submit}>

      <h1 className="text-3xl font-bold text-center mx-auto">{props.formName}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-2 gap-2">
        {

          props.skills ?
            <div className="md:col-span-2">

              <SkillsAdd data={data} onValueChanged={onValueChange} />
            </div>
            :

            props.experience ?
              <div className="w-full md:col-span-2">
                <ExperienceAdd data={getData(data, "Experience")} onValueChanged={onValueChange} />

              </div>
              :
              props.fieldsWithType.map((field: field, key: number) => (
                field.textArea ?
                  <div key={key} className="w-full md:col-span-2" >
                    {
                      <InputField data={getData(data, field.title ? field.title  : "")} title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} onValueChange={onValueChange} />
                    }
                  </div>
                  :
                  <div key={key} className="w-full ">
                    {
                      <InputField data={getData(data, field.title ? field.title : "")} title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} onValueChange={onValueChange} />
                    }
                  </div>
              ))
        }

      </div>
      <div className="flex mx-auto gap-2">
        {
          props.back ?
            <button className="bg-[#403e3e]  px-8 py-1 rounded-md mx-auto " type="button" onClick={props.backCallback} >Back</button>
            : null
        }
        {
          props.next ?
            <button className="bg-[#403e3e]  px-8 py-1 rounded-md mx-auto " type="submit" >Next</button>
            :

            <button className="bg-cyan-800 font-bold px-8 py-1 rounded-md mx-auto " type="submit"  >

              <Link href={'/'}>
                Submit
              </Link>


            </button>
        }
      </div>
    </form>
  );
}
export interface form {
  formName: string;
  fieldsWithType: field[];
  skills?: boolean;
  experience?: boolean;
  nextCallback?: (e: any) => void;
  backCallback?: (e: any) => void;
  submitCallback?: (e: any) => void;
  onDataClick?: (cv: any) => void;
  back?: boolean;
  next?: boolean;
  onValueChange?: any;
}
