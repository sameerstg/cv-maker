'use client'
import { cv, sampleCv } from '@/static/forms'
import React, { useState } from 'react'
import Cvpreview from '../../components/CvPreview'
function Page() {
    const [cvs, setCvs] = useState<cv[]>([sampleCv,sampleCv,sampleCv,sampleCv])
    return (
        <div className=' mx-4'>

            {
                cvs.map((cv, key) => (

                    <div key={key}>
                        <Cvpreview cv={cv}/>
                    </div>
                ))
            }

        </div>
    )
}

export default Page