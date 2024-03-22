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
