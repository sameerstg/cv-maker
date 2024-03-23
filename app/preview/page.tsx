import { cv, sampleCv } from '@/static/forms'
import React from 'react'

function page() {
  const sample: cv = sampleCv
  function TitleDiv(props: any) {
    return (<div className={!props.colorOff ? 'font-bold text-green-600' : "font-bold "}>{props.title}</div>)
  }
  function BorderButton(props: any) {
    return (<div className='rounded-md p-1 bg-slate-950 text-white'>{props.title}</div>);

  }
  interface Descriptions {
    descriptions: string[];
  }
  function Descriptions(props: Descriptions) {
    return (


      <div className='py-5 '>
        {props.descriptions?.length == 0 ? null :
          <div>
            {props.descriptions?.map((desc, key) => (

              <p key={key} className='px-6'>- {desc}</p>

            ))}
          </div>
        }
      </div>

    )
  }
  return (
    <div className='cv border  w-2/3 mx-auto text-2xl bg-white text-black py-5'>
      <div className='header text-center flex flex-col gap-2'>
        <div className='text-5xl font-bold'>{sample.name}</div>
        <div className='grid grid-cols-3 text-wrap font-bold'>
          <button>{sample.email}</button>
          <button>{sample.website}</button>
          <button>{sample.linkedin}</button>
        </div>
      </div>
      <div className='w-full h-[2px] my-2 bg-black'></div>

      <div className='body px-4 flex flex-col gap-5 py-5'>
        <div className='summary text-center flex gap-2'>
          <TitleDiv title={"Summary :"} />
          {sample.summary}
        </div>
        <div className='experience workHistory'>
          <TitleDiv title={"Experience :"} />
          <div className='flex gap-2'>
            {sample.experience?.map((exp, id) => (
              <div key={id}>
                <div className='font-bol'>
                  {/* {sample.experience?.startDate?.split(' ')[1]}
                  {" , "}
                  {sample.experience?.startDate?.split(' ')[3]}
                  {" - "}

                  {sample.experience?.endDate?.split(' ')[1]}
                  {" , "}
                  {sample.experience?.endDate?.split(' ')[3]} */}
                </div>
                <div className='companyAndTitle flex font-bold'>

                  {exp.company}{" | "}{exp.title}
                </div>

                <Descriptions descriptions={exp.description ? exp.description : []} />
                {exp.technologies?.length == 0 ? null :

                  <div className='flex gap-2'>
                    <TitleDiv colorOff={true} title="Technologies :" />
                    <div className='flex gap-2'>

                      {exp.technologies?.map((title, key) => (

                        <BorderButton key={key} title={title} />

                      ))}
                    </div>
                  </div>

                }
              </div>

            ))}
          </div>
        </div>
        <div className='Education'>
          {sample.education?.length == 0 ? null :
            <div>
              {sample.education?.map((edu, key) => (

                <div key={key} className='singleEducation'>
                  <TitleDiv title={"Education :"} />
                  <div className='font-bold'>
                    {edu?.startDate?.split(' ')[1]}
                    {" , "}
                    {edu?.startDate?.split(' ')[3]}
                    {" - "}

                    {edu?.endDate?.split(' ')[1]}
                    {" , "}
                    {edu?.endDate?.split(' ')[3]}
                  </div>
                  <div className='flex gap-2 font-bold'>
                    {edu?.fieldOfStudy}
                    {" | "}
                    {edu?.organization}

                  </div>
                  <div className='Projects'>
                    <TitleDiv colorOff={true} title={"Projects :"} />
                    <Descriptions descriptions={edu?.projects ? edu.projects : []} />
                  </div>
                </div>

              ))}

            </div>
          }

        </div>

        <div className='skills'>
          <TitleDiv title={"Skills :"} />
          <div className='flex gap-2'>
            {sample.skills?.map((skill: string, id) => (
              <BorderButton key={id} title={skill} />


            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default page