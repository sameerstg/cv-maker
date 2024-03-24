'use client'
import { cv } from '@/static/forms'
import React, { useRef } from 'react'
import TitleDiv from './TitleDiv';
import BorderButton from './BorderButton';
import DescriptionsDiv from './Descriptions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
interface cvTagInterface {
    cv: cv;
    noDownloadable?: boolean;
}
export default function Cvpreview(props: cvTagInterface) {
    const sample = props.cv;
    const currentCvRef = useRef(null);
    const handleGeneratePdf = async () => {
        try {
            const inputRef = currentCvRef.current;
            if (!inputRef) {
                console.error('Ref not assigned properly');
                return;
            }
            const canvas = await html2canvas(inputRef);

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4",
            });
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, "PNG", 0, 0, width, height);
            pdf.save(sample.name + "-" + sample.jobTitle + ".pdf");
        }
        catch {
        }

    };
    return (
        <div className='CV'>

            <div className='cv border w-full  mx-auto text-2xl bg-white text-black py-5' ref={currentCvRef}>
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
                        <div className='flex flex-col gap-2'>
                            {sample.experience?.map((exp, id) => (
                                <div key={id}>
                                    <div className='font-bold'>
                                        {exp?.startDate?.split(' ')[1]}
                                        {" , "}
                                        {exp?.startDate?.split(' ')[3]}
                                        {" - "}

                                        {exp?.endDate?.split(' ')[1]}
                                        {" , "}
                                        {exp?.endDate?.split(' ')[3]}
                                    </div>
                                    <div className='companyAndTitle flex font-bold'>

                                        {exp.company}{" | "}{exp.title}
                                    </div>

                                    <DescriptionsDiv descriptions={exp.description ? exp.description : []} />
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
                                <TitleDiv title={"Education :"} />
                                {sample.education?.map((edu, key) => (

                                    <div key={key} className='singleEducation'>
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
                                            <DescriptionsDiv descriptions={edu?.projects ? edu.projects : []} />
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
            <div className='w-full mx-auto flex flex-col'>

                <button className='bg-slate-600 mx-auto w-1/3  my-10 py-5' onClick={handleGeneratePdf}>Generate PDF</button>
            </div>
        </div>
    )

}
