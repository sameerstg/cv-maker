import React from 'react'

type Props = {
    title: string;
    number: number;
    showLine :boolean;
}

const RoundedStatus = (props: Props) => {
    return (
        <>
            <div className="flex flex-col mx-auto gap-4 mb-6">
                <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[50px] h-[50px] flex  mx-auto ">
                    <div className="mx-auto align-middle justify-center flex flex-col">
                        {props.number}
                    </div>

                </div>
                <h1 className="w-full mx-auto text-center font-bold">{props.title}</h1>
                {props.showLine ? <div className="mx-auto w-1 h-10 bg-white"></div> : null}
            </div>
        </>
    )
}

export default RoundedStatus