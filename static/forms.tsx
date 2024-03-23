import { form } from "@/app/components/Form";

const personalDetails: form = {
    formName: "Personal Details", fieldsWithType: [
        {
            title: "Full Name",
            label: "eg: Sameer Ahmed",
            type: "text",
            mandatory: true,


        },
        {
            label: "Job Title",
            type: "text",
            mandatory: true

        },
        {
            label: "Email",
            type: "text",
            mandatory: false

        },
        {
            label: "Contact Number",
            type: "tel",
            mandatory: true

        },
        {
            label: "Github",
            type: "text",
            mandatory: false

        },
        {
            label: "Linkedin",
            type: "text",
            mandatory: false

        },
        {
            label: "Portfolio Website",
            type: "text",
            mandatory: false

        },

    ]
};
const summary: form = {
    formName: "Summary", fieldsWithType: [
        {
            label: "Summary",
            type: "text",
            mandatory: true,
            textArea: true

        }
    ]
};
export const workHistory: form = {
    formName: "Work History", fieldsWithType: [
        {
            label: "Company Name",
            type: "text",
            mandatory: false

        },
        {
            label: "Job Title",
            type: "text",
            mandatory: false

        },
        {
            label: "Country",
            type: "text",
            mandatory: false

        },
        {
            label: "City",
            type: "text",
            mandatory: false

        },
        {
            label: "From",
            type: "date",
            mandatory: false

        },
        {
            label: "Till",
            type: "date",
            mandatory: false

        },
        {
            title: "Technologies",
            label: "Technologies e.g: Python, Photoshop, Blender, Game Development",
            type: "text",
            mandatory: false

        },
        {
            label: "Description",
            type: "text",
            mandatory: false

        },
    ]
};
const skills: form = {
    formName: "Skills",
    fieldsWithType: [],
    skills: true
};
const education: form = {
    formName: "Education", fieldsWithType: [
        {
            label: "Education",
            type: "text",
            mandatory: true,
            textArea: true

        }
    ]
};

export const allForms: form[] = [personalDetails, summary, workHistory, skills];
export interface field {
    title?: string;
    label?: string;
    type?: string;
    mandatory: boolean;
    textArea?: boolean;
    size?: Number;
}
export interface cv {
    name?: string;
    email?: string;
    phoneNumber?: number;
    website?: string;
    linkedin?: string;
    github?: string;
    jobTitle?: string;
    summary?: string;
    skills?: string[];
    experience?: Experience[];
    education?: Education[];
}
export interface Experience {
    company?: string;
    title?: string;
    country?: string;
    city?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string[];
    technologies?: string[];
}
export interface Education {
    fieldOfStudy?: string;
    organization?: string;
    startDate?: string;
    endDate?: string;
    grade?: string;
    projects?: string[];
}
export const sampleExperience: Experience = {
    company: "Eviar",
    title: "Vr Game Developer",
    country: "Pakistan",
    city: "Karachi",
    technologies: ["c#", "blender", "unity", "ar", "vr", "javascript", "c", "python"],
    description: ["Successfully developed five VR games from concept to completion, demonstrating strong project management skills and technical expertise."
        , "Designed and implemented realistic simulations to assist professionals in various industries, contributing to their training and skill development.",

        "Leveraged Blender to create 3D models and assets, ensuring high-quality graphics and a seamless user experience.",
        "Acted as a sole developer, taking ownership of the entire game development process, including concept ideation, coding, design, and testing.",
        "Maintained a strong focus on user experience, optimizing game mechanics and interactions to enhance player engagement.",
    ],
    // startDate: Date(),
    // endDate: Date(),

}
export const sampleEducation: Education = {
    fieldOfStudy: "Software Engineering",
    organization: "Iqra University",
    startDate: Date(),
    endDate: Date(),
    grade: "3.4 GPA",
    projects: [
        "Custom inverter assembly with cutoff system (Physics project)",
        "Hand detection software development (Programming fundamentals project)",
    ],
}
export const sampleCv: cv = {
    name: "Sameer Ahmed",
    email: "sameerstg@outlook.com",
    phoneNumber: 923220390382,
    website: "sameerstg.com",
    linkedin: "https://www.linkedin.com/in/sameerstg/",
    github: "github.com/sameerstg",
    jobTitle: "Vr Game Developer",
    summary: "A Geek who have a keen interest in technologies",
    skills: ["c#", "blender", "unity", "ar", "vr", "javascript", "c", "python"],
    experience: [sampleExperience],
    education: [sampleEducation],
};
