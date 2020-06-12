import React, { useState }  from 'react';
import '../css/buttons/button.css';
import '../css/inputs/text-input.css';
import '../css/inputs/label.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function ContactForm() {
    const [formData, setFormData] = useState(
        {
            name: '',
            subject: '',
            email: '',
            message: ''
        }
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            [e.target.subject]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.message]: e.target.value
        });
    };

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", formData})
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
                <input type="text" name="name" onChange={handleChange} className="text-input" placeholder="e.g. Kyle"/>  
            </div>
            <div className="row rauto">
                <label className="label">Email</label> 
                <input type="email" name="email" onChange={handleChange} className="text-input" placeholder="example@gmail.com"/>                    
            </div>
            <div className="row rauto">
                <label className="label">Subject</label> 
                <input type="text" name="subject" onChange={handleChange} className="text-input" placeholder="Great Projects"/>
            </div>
            <div className="row rauto">
                <label className="label">Message</label> 
                <textarea name="message" onChange={handleChange} className="text-input" placeholder="Message here..." rows="4" cols="66"></textarea>                    
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