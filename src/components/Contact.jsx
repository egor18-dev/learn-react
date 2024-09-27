import React from "react";

const Contact = (props) => {
    const {name} = props;

    return (
        <section className="contact">
            <h5>{name}</h5>
        </section>
    );
};

export default Contact;
