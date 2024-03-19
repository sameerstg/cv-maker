import InputField from "@/components/InputField";
import {  field } from "../app/page";

export default function Form(props: form) {
  const arr: field[] = props.fieldsWithType;
  console.log("hello world");
  return (
    <form className="flex flex-col gap-3 justify-center items-start mx-2">
      <InputField label="Name" type="text" />
      <InputField label="Job Title" type="text" />
      <InputField label="Email" type="email" />
      <InputField label="Contact Number" type="tel" />
      <InputField label="Github Link" type="text" />
      <InputField label="Linkedin Link" type="text" />
      <InputField label="Portfolio Website" type="text" />
      <button className="bg-[#403e3e] px-8 py-1 rounded-md">Next</button>
      <div>


        {/* {arr.map((key:any,f: field) => {
    
    
    <div id={key}>
          
    </div>
    
            })} */}


      </div>
    </form>
  );
}
export interface form {
  formName: string;
  fieldsWithType: field[];
}