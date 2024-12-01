import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }){
    return(
        <div className="contact-list">
            {
                contacts.map((c) => (
                    <ContactItem key={c.id} {...c}/>
                ))
            }
        </div>
    );
}

export default ContactList;