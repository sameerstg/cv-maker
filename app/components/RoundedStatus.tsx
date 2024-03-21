import React from 'react'

type Props = {
    title: string;
    number: number;
    tick: boolean;
}

const RoundedStatus = (props: Props) => {
    return (
        <>
            <div className="flex flex-col mx-auto gap-4 md:gap-2 mb-2 w-full">
                <div className="rounded-[50%] bg-black border-4 border-cyan-300 w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex  mx-auto">
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