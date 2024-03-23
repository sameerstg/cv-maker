'use client'
import { cv, sampleCv } from '@/static/forms'
import React, { useState } from 'react'
import CvPreview from '@/app/components/CvPreview'
function page() {
    const [cvs, setCvs] = useState<cv[]>([sampleCv,sampleCv,sampleCv,sampleCv])
    return (
        <div className=' mx-4'>

            {
                cvs.map((cv, key) => (

                    <div key={key}>
                        <CvPreview cv={cv}/>
                    </div>
                ))
            }

        </div>
    )
}

export default page