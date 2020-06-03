import React from 'react';
import '../css/buttons/button.css';
import '../css/inputs/text-input.css';
import '../css/inputs/label.css';

export default function ContactForm() {
    return (
        <iframe style={{"margin": "0 auto", "display":"block"}}
        src="https://docs.google.com/forms/d/e/1FAIpQLSd3BefqRCF-nSrwcSc9XnL5kL8qQbTwfc14YRWCq5u4-hDHCQ/viewform?embedded=true"
        title="contactForm" width="100%" height="850" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        // <div className="col center">
        //     <form name="contact" method="POST" data-netlify="true">
        //         <p>
        //             <label className="label">Name</label> <br/>
        //             <input type="text" name="name" className="text-input" size="50"/>  
        //         </p>
        //         <p>
        //             <label className="label">Email</label> <br/>
        //             <input type="email" name="email" className="text-input" size="50"/>
        //         </p>
        //         <p>
        //             <label className="label">Subject</label> <br/>
        //             <input type="text" name="subject" className="text-input" size="50"/>
        //         </p>
        //         <p>
        //             <label className="label">Message</label> <br/>
        //             <textarea name="message"></textarea>
        //         </p>
        //         <p>
        //             <button type="submit" className="button tertiary zoomhover">Send</button>
        //         </p>
        //     </form>
        // </div>
    );
}