import React from 'react'

type Props = {
    title: string;
    number: number;
    tick: boolean;
}

const RoundedStatus = (props: Props) => {
    return (
        <>
            <div className="flex flex-col mx-auto gap-4 mb-6">
                <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[50px] h-[50px] flex  mx-auto ">
                    <div className="mx-auto align-middle justify-center flex flex-col">
                        {props.tick ? "✔" : props.number}
                    </div>

                </div>
                <h1 className="w-full mx-auto text-center font-bold text-nowrap">{props.title}</h1>
            </div>
        </>
    )
}

export default RoundedStatus