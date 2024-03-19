import Form, { form } from "@/app/components/Form";
import RoundedStatus from "@/app/components/RoundedStatus";
import {allForms} from '@/static/forms'
export default function Home() {
  
  return (
    <>

      {
        allForms.map((form,key) => (
          <RoundedStatus key={key} number={allForms.indexOf(form) + 1} title={form.formName} showLine={allForms.indexOf(form) !== allForms.length - 1} />
        ))
      }
      {
        allForms.map((form: form,key) => (
          < Form key={key} formName={form.formName} fieldsWithType={form.fieldsWithType} />
        ))
      }

    </>
  );
}

