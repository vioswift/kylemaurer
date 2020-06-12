import React from 'react';
import '../css/buttons/button.css';
import '../css/inputs/text-input.css';
import '../css/inputs/label.css';

export default function ContactForm() {
    return (
        <form name="contact" method="POST" data-netlify="true" className="form">
            <div className="row rauto">
                <label className="label">Name</label> 
                <input type="text" name="name" className="text-input" placeholder="e.g. Kyle"/>  
            </div>
            <div className="row rauto">
                <label className="label">Email</label> 
                <input type="email" name="email" className="text-input" placeholder="example@gmail.com"/>                    
            </div>
            <div className="row rauto">
                <label className="label">Subject</label> 
                <input type="text" name="subject" className="text-input" placeholder="Great Projects"/>
            </div>
            <div className="row rauto">
                <label className="label">Message</label> 
                <textarea name="message" className="text-input" placeholder="Message here..." rows="4" cols="66"></textarea>                    
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