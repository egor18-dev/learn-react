import React from "react";
import Contact from "./Contact";

const Contacts = (props) => {
  const { list } = props;

  return <section className="contacts">
    {list.map((contact, index) => {
       return <Contact key={index} name={contact} />
    })}
  </section>;
};

export default Contacts;
