import React, { useState } from 'react'
import Form from './Form'
import Contacts from './Contacts'

const Container = () => {

  const [contacts, setContacts] = useState([]);

  const sendData = (name) => {
    setContacts([...contacts, name]);
  }

  return <>
    <main>
        <Contacts list={contacts}/>
        <Form sendData={sendData}/>
    </main>
  </>
}

export default Container