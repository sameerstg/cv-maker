'use client';
import { cv, sampleCv } from '@/static/forms';
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Cvpreview from '../components/CvPreview';

export default function page() {
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


    const sample: cv = sampleCv;



    return (
        <div>

            <Cvpreview cv={sample} />
        </div>
    );
}
