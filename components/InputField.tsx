import { field } from "@/static/forms";
import { useState } from "react";

export default function InputField(props: field) {
 
  return (<>


    <div className="flex flex-col gap-2 w-full">

      <label htmlFor="name">{props.title !== null && props.title !== undefined ? props.title : props.label}{props.mandatory ? <span className="text-[#ff4141]"> *</span> : null}</label>
      {
        props.textArea ?
          <textarea className="bg-[#262626] px-2 py-1 w-full h-20 md:h-48 " placeholder={props.label} required={props.mandatory}
            onChange={x => props.onValueChange(props.inputRef,x.target.value)}></textarea>
          :
          <input className={"bg-[#262626] px-2 py-1 w-full"} type={props.type} placeholder={props.label} spellCheck={props.textArea} required={props.mandatory}
            onChange={x => props.onValueChange(props.inputRef,x.target.value)}></input>
      }
    </div>
  </>);
}

