export default function TitleDiv(props: any) {
  return (<div className={!props.colorOff ? 'font-bold text-green-600' : "font-bold "}>{props.title}</div>);
}
