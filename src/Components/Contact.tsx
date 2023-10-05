import '../Style/contact.scss';

export default function Contact() {
    return(
        <div className="Contact" id="contact">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out to hire me, get in touch, or leave any comments!<br/>You can also reach me at CanaanWhite5@gmail.com</p>

             <div className="FormContainer">
                <div className="Name">

                    <div className="FirstName">
                        <label htmlFor='FirstName'>First Name</label>
                        <input type="text" id="FirstName" />
                    </div>

                    <div className="LastName">
                        <label htmlFor='LastName'>Last Name</label>
                        <input type="text" id="LastName" />
                    </div>

                </div>

                <div className="Email">
                    <label htmlFor='Email'>Email</label>
                    <input type="email" id="Email" />
                </div>

                <div className="Subject">
                    <label htmlFor='Subject'>Subject</label>
                    <input type="text" id="Subject" />
                </div>

                <div className="Message">
                    <label htmlFor='Message'>Message</label>
                    <textarea id="Message" />
                </div>

                <div className="Submit">
                    <button>Submit</button>
                </div>

             </div>
        </div>
    )
}