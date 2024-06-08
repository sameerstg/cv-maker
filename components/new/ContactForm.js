import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="form-container text-black ">
            <h1 className="text-center font-bold text-3xl">Send a message to us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Your Message..." rows="4"></textarea>
                <button className="py-2 rounded-2xl">Send Message</button>
            </form>
        </div> 

    )
}

export default ContactForm;