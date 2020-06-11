import React from 'react';
import '../css/buttons/button.css';
import '../css/inputs/text-input.css';
import '../css/inputs/label.css';
import '../css/inputs/form.css';

export default function ContactForm() {
    return (
        <iframe style={{"margin": "0 auto", "display":"block"}}
        src="https://docs.google.com/forms/d/e/1FAIpQLSd3BefqRCF-nSrwcSc9XnL5kL8qQbTwfc14YRWCq5u4-hDHCQ/viewform?embedded=true"
        title="contactForm" width="100%" height="850" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

        // <form name="contact" method="POST" data-netlify="true" className="form">
        //     <div className="row">
        //         <label className="label">Name</label> 
        //         <input type="text" name="name" className="text-input" placeholder="e.g. Kyle" size="50"/>  
        //     </div>
            
        //     <div className="row">
        //         <label className="label">Email</label> 
        //         <input type="email" name="email" className="text-input" placeholder="example@gmail.com" size="50"/>                    
        //     </div>
            
        //     <div className="row">
        //         <label className="label">Subject</label> 
        //         <input type="text" name="subject" className="text-input" placeholder="Great Projects" size="50"/>
        //     </div>

        //     <div className="row">
        //         <label className="label">Message</label> 
        //         <textarea name="message" className="text-input" placeholder="Message here..." rows="4" cols="66"></textarea>                    
        //     </div>

        //     <div className="row">
        //         <hr/>
        //     </div>
            
        //     <div className="row">
        //         <button type="submit" className="button tertiary zoomhover">Send</button> 
        //     </div>
        // </form>
    );
}