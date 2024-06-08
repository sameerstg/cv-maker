import "../../components/new/ServiceInfoStyles.css"
import SCard1 from "../../components/new/Assets/SCard1.png"
import SCard2 from "../../components/new/Assets/SCard2.png"
import SCard3 from "../../components/new/Assets/SCard3.jpg"
import SCard4 from "../../components/new/Assets/SCard4.jpg"
import ServiceInfoData from "../../components/new/ServicesInfoData"


function ServiceInfo() {
    return(
        <div className="service">
            <h1>Create Professional Resumes</h1>
            <p>Build stunning, professional resumes with ease using our intuitive resume builder.</p>
            <div className="Service-card">
                < ServiceInfoData
                image={SCard1}
                heading="Create Professional Resumes"
                text="Build stunning, professional resumes with ease 
                using our intuitive resume builder.Customize your resume
                with various templates and layouts to stand out in your 
                job search."
                link='/'
                linktext="Create Now"
                />
                < ServiceInfoData
                image={SCard2}
                heading="Craft Custom Cover Letters"
                text="Generate personalized cover letters that complement 
                your resume. Tailor your cover letter for each job application 
                to make a strong impression."
                link='/'
                linktext="Start Writing"
                />
                < ServiceInfoData
                image={SCard3}
                heading="Showcase Your Work"
                text=" Integrate your portfolio seamlessly with your resume. 
                Display your best projects and achievements to potential 
                employers in a polished and professional manner."
                link='/'
                linktext="Showcase Now"
                />
                < ServiceInfoData
                image={SCard4}
                heading="Share Your Resume Easily"
                text="Share your resume with a single click. Download it 
                as a PDF or share a link with employers, making the 
                application process quick and hassle-free."
                link='/'
                linktext="Share Now"
                />
            </div>
        </div>
    )
}

export default ServiceInfo;