'use client'
import InputField from "@/app/components/InputField";
import { field } from "@/static/forms";

export default function Form(props: form, currentForm?: any, setcurrentForm?: any) {
  function handleNext(e: React.FormEvent) {

    e.preventDefault();
    console.log("hello world");
    console.log(currentForm);
    // setcurrentForm(currentForm + 1);
  }
  return (
    <form className="flex w-full flex-col gap-2 justify-center items-start mx-auto my-4" onSubmit={handleNext}>

      <h1 className="text-3xl font-bold text-center mx-auto">{props.formName}</h1>
      {
        props.fieldsWithType.map((field: field, key) => (<>

          <InputField key={key} label={field.label} type={field.type} mandatory={field.mandatory} textArea={field.textArea} />
        </>))
      }
      <button className="bg-[#403e3e]  px-8 py-1 rounded-md mx-auto " type="submit" >Next</button>

    </form>
  );
}
export interface form {
  formName: string;
  fieldsWithType: field[];
}
