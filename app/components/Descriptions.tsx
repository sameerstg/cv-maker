export interface Descriptions {
    descriptions: string[];
}
export default function DescriptionsDiv(props: Descriptions) {
    return (


        <div className='py-5 '>
            {props.descriptions?.length == 0 ? null :
                <div>
                    {props.descriptions?.map((desc, key) => (

                        <p key={key} className='px-6'>- {desc}</p>

                    ))}
                </div>}
        </div>

    );
}