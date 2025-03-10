import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';
import '../assets/styles/components/Contact.css';

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID!
            ).then(
                (result: any) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                },
                (error: any) => {
                    console.log(error.text);
                    alert('Failed to send message, please try again.');
                }
            );
            form.current.reset();
        }
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-heading">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
                
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
                
                <label htmlFor="reply_to">Email</label>
                <input type="email" id="reply_to" name="reply_to" placeholder="Your Email" required />
                
                <label htmlFor="call_back">Phone Number</label>
                <InputMask 
                    mask="(999) 999-9999" 
                    placeholder="(999) 999-9999" 
                    id="call_back" 
                    name="call_back"
                    required 
                />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                <button type="submit" className="submit-button">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;