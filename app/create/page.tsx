'use client'
import Form from "@/components/Form";
import RoundedStatus from "@/components/RoundedStatus";
import { allForms, cv } from '@/static/forms'
import { useRef, useState } from "react";

export default function Home() {
  const [currentForm, setcurrentForm] = useState(0)

  const [cv, setCv] = useState<cv | null>(null)
  const handleCvFromChild = (cv: cv) => {
    setCv(cv);
    console.log(cv.name);
  };


  function handleNext(e: any) {

    e.preventDefault();
    if (currentForm === allForms.length - 1) return;
    setcurrentForm(currentForm + 1);
  }
  function handleBack(e: any) {

    e.preventDefault();

    if (currentForm === 0) return;
    setcurrentForm(currentForm - 1);
  }
  function handleSubmit(e: any) {
    e.preventDefault();

  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4  w-full">
        {
          allForms.map((form, key) => (

            <div key={key} className="md:grid md:grid-cols-3 content-center items-center">
              {allForms.indexOf(form) !== 0 ? <div className="mx-auto bg-white w-1 h-4 md:w-full  md:h-1   mb-4 md:mb-10"></div> : <span></span>}
              <RoundedStatus tick={allForms.indexOf(form) < currentForm} number={allForms.indexOf(form) + 1} title={form.formName} />
              {allForms.indexOf(form) !== allForms.length - 1 ? <div className="mx-auto bg-white w-1 h-4 md:w-full  md:h-1 mb-0 md:mb-10"></div> : null}
            </div>

          ))
        }
      </div>

      {
        < Form experience={allForms[currentForm].experience} onDataClick={handleCvFromChild} formName={allForms[currentForm].formName} skills={allForms[currentForm].skills} fieldsWithType={allForms[currentForm].fieldsWithType} submitCallback={handleSubmit} backCallback={handleBack} nextCallback={handleNext} next={currentForm !== allForms.length - 1} back={currentForm !== 0} />
      }

    </>
  );
}

export interface Data {
  key: string;
  value: string;
}