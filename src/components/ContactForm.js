import React, { useRef }  from 'react';
import '../css/buttons/button.css';
import '../css/inputs/text-input.css';
import '../css/inputs/label.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function ContactForm() {
    const name = useRef();
    const subject = useRef();
    const email = useRef();
    const message = useRef();

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", 
                name: name.current.value,
                subject: subject.current.value,
                email: email.current.value,
                message: message.current.value
            })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
    
        e.preventDefault();
    };

    return (
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit.bind()}>
            <input type="hidden" name="form-name" value="contact" /> 
            <div className="row rauto">
                <label className="label">Name</label> 
                <input type="text" name="name" ref={name} className="text-input" placeholder="e.g. Kyle"/>  
            </div>
            <div className="row rauto">
                <label className="label">Email</label> 
                <input type="email" name="email" ref={email} className="text-input" placeholder="example@gmail.com"/>                    
            </div>
            <div className="row rauto">
                <label className="label">Subject</label> 
                <input type="text" name="subject" ref={subject} className="text-input" placeholder="Great Projects"/>
            </div>
            <div className="row rauto">
                <label className="label">Message</label> 
                <textarea name="message" className="text-input" ref={message} placeholder="Message here..." rows="4" cols="66"></textarea>                    
            </div>
            <div className="row rauto">
                <hr/>
            </div>
            <div className="row rauto">
                <button type="submit" className="button tertiary zoomhover">Send</button> 
            </div>
        </form>
    );
}