import { field } from "../app/page";

export default function InputField(props: field) {
  return (<>

    <div className="flex gap-2 p-2">
      <label htmlFor="name">{props.label}</label>
      <input className="bg-[#262626] px-2" type={props.type} placeholder={props.label}></input>
    </div>
  </>);
}

