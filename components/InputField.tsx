import { field } from "@/static/forms";
import { useEffect, useState } from "react";

export default function InputField(props: field) {
  const [data, setData] = useState("")
  useEffect(() => {
    
    console.log(props.title)
    console.log(props.data?.value)

    if (props.data?.value === undefined) {
      console.log("value null")
      // setData("")
      return;
    }
    setData(props.data?.value)
    console.log(props.title)
    console.log(props.data?.value)
    // console.log(props.title?props.title:props.label?props.label:"null")
    // console.log(props.data?.value)
  }, []);
  return (<>


    <div className="flex flex-col gap-2 w-full">

      <label >{props.title !== null && props.title !== undefined ? props.title : props.label}{props.mandatory ? <span className="text-[#ff4141]"> *</span> : null}</label>
      {
        props.textArea ?
          <textarea className="bg-[#262626] px-2 py-1 w-full h-20 md:h-48 " placeholder={props.label} required={props.mandatory}
            value={data} onChange={x => { setData(x.target.value); if (props.onValueChange == null) { console.log("onvaluechange is null"); return; }; props.onValueChange(props.title ? props.title : props.label, x.target.value) }}
          ></textarea>

          :
          <input className={"bg-[#262626] px-2 py-1 w-full"} type={props.type} placeholder={props.label} spellCheck={props.textArea} required={props.mandatory}
            value={data} onChange={x => { setData(x.target.value); if (props.onValueChange == null) { console.log("onvaluechange is null"); return; }; props.onValueChange(props.title ? props.title : props.label, x.target.value) }}></input>
      }
    </div>
  </>);
}

