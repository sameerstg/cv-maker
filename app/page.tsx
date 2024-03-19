import Form from "@/components/Form";
import Navbar from "@/components/navbar";

export default function Home() {


  return (
    <>
      <div className="flex flex-col w-full px-7 py-10 text-center" >
        <h1 className="mx-auto">Cv/Resume Maker</h1>
      </div>
      <div className="flex flex-col gap-2">
        <>
          <div className="flex flex-col mx-auto gap-4">
            <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[50px] h-[50px] flex  mx-auto ">
              <div className="mx-auto align-middle justify-center flex flex-col">
                1
              </div>

            </div>
            <h1 className="w-full mx-auto text-center font-bold">Personal Details</h1>
            <div className="mx-auto w-1 h-10 bg-white"></div>
          </div>
        </>
        <>
          <div className="flex flex-col mx-auto gap-4">
            <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[50px] h-[50px] flex  mx-auto ">
              <div className="mx-auto align-middle justify-center flex flex-col">
                1
              </div>

            </div>
            <h1 className="w-full mx-auto text-center font-bold">Personal Details</h1>
            <div className="mx-auto w-1 h-10 bg-white"></div>
          </div>
        </>
        <>
          <div className="flex flex-col mx-auto gap-4">
            <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[50px] h-[50px] flex  mx-auto ">
              <div className="mx-auto align-middle justify-center flex flex-col">
                1
              </div>

            </div>
            <h1 className="w-full mx-auto text-center font-bold">Personal Details</h1>
            <div className="mx-auto w-1 h-10 bg-white"></div>
          </div>
        </>
        <>
          <div className="flex flex-col mx-auto gap-4">
            <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[50px] h-[50px] flex  mx-auto ">
              <div className="mx-auto align-middle justify-center flex flex-col">
                1
              </div>

            </div>
            <h1 className="w-full mx-auto text-center font-bold">Personal Details</h1>
            <div className="mx-auto w-1 h-10 bg-white"></div>
          </div>
        </>
      </div>
      <Form formName="Bio" fieldsWithType={[]} />

      {/* <InputField label="asfasf" type="asfasf" /> */}
    </>
  );
}

export interface field {
  label: string;
  type: string;
}

