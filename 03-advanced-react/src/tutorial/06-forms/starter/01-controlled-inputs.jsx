import { useState } from "react";

const ControlledInputs = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const submit= (e)=> {
        e.preventDefault();
        console.log(name, email);
    }
    return (
        <form className='form'>
            <h4>controlled inputs</h4>
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    name
                </label>
                <input type='text' 
                className='form-input' 
                id='name' 
                name="name" 
                value={name} 
                onChange={(e) =>  {
                    const name = e.target.name;
                    const value = e.target.value;
                    console.log(name, value);
                    setName(e.target.value);
                }}/>
            </div>
            <div className='form-row'>
                <label htmlFor='email' className='form-label'>
                    Email
                </label>
                <input type='email' className='form-input' id='email' name="email" value={email}
                onChange={(e) =>  {
                    const name = e.target.name;
                    const value = e.target.value;
                    console.log(name, value);
                    setEmail(e.target.value)
                }}/>
            </div>
            <button type='submit' className='btn btn-block' onSubmit={submit}>
                submit
            </button>
        </form>
    );
};
export default ControlledInputs;