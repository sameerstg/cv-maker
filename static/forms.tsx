import { form } from "@/components/Form";

const personalDetails: form = {
    formName: "Personal Details", fieldsWithType: [
        {
            title: "Full Name",
            label: "eg: Sameer Ahmed",
            type: "text",
            mandatory: true,


        },
        {
            title: "Job Title",
            label: "Job Title",
            type: "text",
            mandatory: true,

        },
        {
            title: "Email",
            label: "Email",
            type: "text",
            mandatory: false,

        },
        {
            title: "Contact Number",
            label: "Contact Number",
            type: "tel",
            mandatory: true,

        },
        {
            title: "Github",
            label: "Github",
            type: "text",
            mandatory: false,

        },
        {
            title: "Linkedin",
            label: "Linkedin",
            type: "text",
            mandatory: false,

        },
        {
            title: "Portfolio Website",
            label: "Portfolio Website",
            type: "text",
            mandatory: false,

        },

    ]
};
const summary: form = {
    formName: "Summary", fieldsWithType: [
        {
            title:"Summary",
            label: "Summary",
            type: "text",
            mandatory: true,
            textArea: true,

        }
    ]
};
export const workHistory: form = {

    experience: true,
    formName: "Work History", fieldsWithType: [
        {
            title: "Company Name",
            label: "Company Name",
            type: "text",
            mandatory: true,

        },
        {
            title: "Job Title",
            label: "Job Title",
            type: "text",
            mandatory: true,

        },
        {
            title: "Country",
            label: "Country",
            type: "text",
            mandatory: false,

        },
        {
            title: "City",
            label: "City",
            type: "text",
            mandatory: false,

        },
        {
            title: "From",
            label: "From",
            type: "date",
            mandatory: false,

        },
        {
            title: "Till",
            label: "Till",
            type: "date",
            mandatory: false,

        },
        {
            title: "Technologies",
            label: "Technologies e.g: Python, Photoshop, Blender, Game Development",
            type: "text",
            mandatory: false,

        },
        {
            title:"Description",
            label: "Description",
            type: "text",
            mandatory: false,

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
            title: "Education",
            label: "Education",
            type: "text",
            mandatory: true,
            textArea: true,

        }
    ]
};

export const allForms: form[] = [workHistory,personalDetails, summary, workHistory, skills];
export interface field {
    title?: string;
    label?: string;
    type?: string;
    mandatory: boolean;
    textArea?: boolean;
    size?: Number;
    onValueChange?: any;
    data?: any;
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
    startDate?: string;
    endDate?: string;
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
export const eviarExp: Experience = {
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
    startDate: Date(),
    endDate: Date(),

}
export const blossomExp: Experience = {
    company: "BLOSSOM HEAVEN",
    title: "Unity Game Developer",
    country: "Pakistan",
    city: "Karachi",
    technologies: ["c#", "blender", "unity", "c"],
    description: ["Implemented state machine design pattern to create efficient and dynamic game mechanics and systems."
        , "Created captivating character animations, bringing life and personality to in-game characters.",

        "Designed visually appealing and user-friendly UI to enhance player experience and engagement.",
        "Utilized Git for version control, ensuring smooth collaboration and effective code management.",
        "Proactively kept up to date with the latest trends and advancements in game development to deliver cuttingedge gaming experiences",
        "Employed strong problem-solving skills to optimize game performance, ensuring seamless gameplay.",
    ],
    startDate: Date(),
    endDate: Date(),

}
export const suhangExp: Experience = {
    company: "SUHANG CORPORATION",
    title: "Marketing Officer",
    country: "Pakistan",
    city: "Karachi",
    technologies: ["Email Marketing", "Ad Campaign", "Lead Generation", "Post Creation"],
    description: [
        "Designed and curated compelling social media posts, using graphic designing and video editing skills to create visually captivating content.",
        "Strategically managed social media marketing campaigns, driving brand awareness and engagement across various platforms.",
        "Utilized data analytics and insights to optimize social media strategies, enhancing overall campaign performance.",
        "Stayed updated with industry trends and best practices, continuously improving social media marketing strategies.",

    ],
    startDate: Date(),
    endDate: Date(),

}
export const freelance: Experience = {
    company: "Freelance",
    title: "Services of Game Development and App/Web Development",
    country: "Pakistan",
    city: "Karachi",
    technologies: ["c#", "blender", "unity", "ar", "vr", "javascript", "c", "python", "react", "automation", "3d animation"],
    description: ["Managed multiple projects simultaneously, ensuring timely delivery and exceeding client expectations.",
        "Effectively communicated with clients to understand project requirements, provide updates, and address any queries or concerns.",
        "Demonstrated strong problem, solving skills, resolving complex technical issues efficiently during the development process.",
        " Proactively stayed updated with the latest trends and advancements in game development, web development,and app development.",
    ],
    startDate: Date(),
    endDate: Date(),

}
export const uni: Education = {
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
export const aptech: Education = {
    fieldOfStudy: "Unity GAME DEVELOPMENT AND 3D MODELLING",
    organization: "Aptech Sponsored/Scholarship by NAVTTC",
    startDate: Date(),
    endDate: Date(),
    projects: [
        "Designed and developed a survival game, successfully presenting it at a institute functions, highlighting the practical application of your game development skills",
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
    experience: [eviarExp, blossomExp, freelance, suhangExp],
    education: [uni, aptech],
};
