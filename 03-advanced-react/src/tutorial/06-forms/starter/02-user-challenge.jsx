import { useState } from "react";
import { data } from '../../../data';

const UserChallenge = () => {
    const [name, setName]= useState('');
    const [user, setUser]= useState(data);
    const handleSubmit= (e)=> {
        e.preventDefault();
        // console.log(name);
        if(!name){
            console.log("Please enter a name");
            return;
        }
        const fakeID= Date.now();
        // console.log(fakeID);
        const newUser= {id: fakeID, name};
        // console.log(newUser);
        const updatedUser= [...user, newUser];
        setUser(updatedUser);
        setName('');
    }
    const remove= (id)=> {
        const newUser= user.filter((prop)=> prop.id!== id)
        setUser(newUser);
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input type='text' 
                    className='form-input' 
                    id='name'
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-block'>
                    submit
                </button>
            </form>
            {/* render users below */}
            {user.map((prop)=> {
                return (
                    <div key={prop.id}>
                        <h4>{prop.name}</h4>
                        <button className="btn" 
                        onClick={()=> remove(prop.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
    );
};
export default UserChallenge;
