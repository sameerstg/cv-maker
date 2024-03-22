'use client'
import InputField from "@/app/components/InputField";
import { field } from "@/static/forms";
import SkillsAdd from "./SkillsAdd";

export default function Form(props: form) {

  return (
    <form className="flex w-full flex-col gap-2 justify-center items-start mx-auto my-4" onSubmit={props.next ? props.nextCallback : props.submitCallback}>

      <h1 className="text-3xl font-bold text-center mx-auto">{props.formName}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-2 gap-2">
        {

          props.skills ?
            <div className="md:col-span-2">

              <SkillsAdd />
            </div>
            :
            props.fieldsWithType.map((field: field, key) => (
              field.textArea ?
                <div key={key} className="w-full md:col-span-2">
                  {
                    <InputField title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />
                  }
                </div>
                :
                <div key={key} className="w-full ">
                  {

                    <InputField title={field.title} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />


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

            <button className="bg-cyan-800 font-bold px-8 py-1 rounded-md mx-auto " type="submit"  >Submit</button>
        }
      </div>

    </form>
  );
}
export interface form {
  formName: string;
  fieldsWithType: field[];
  skills?: boolean;
  nextCallback?: (e: any) => void;
  backCallback?: (e: any) => void;
  submitCallback?: (e: any) => void;
  
  back?: boolean;
  next?: boolean;
}
