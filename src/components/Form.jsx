import React, { useState } from 'react'

const Form = (props) => {
    const {sendData} = props;

    const [name, setName] = useState('');

    const changeValue = (e) => {
        setName(e.target.value ? e.target.value : '');
    }

    const sendValue = (e) => {
        e.preventDefault();
        sendData(name);
    }

  return (
        <form onSubmit={sendValue}>
            <input type="text" placeholder='Introduce el nombre' onKeyUp={changeValue}/>
        </form>
    )
}

export default Form