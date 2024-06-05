import { useState } from "react";

const ToggleChallenge = () => {
    const [boolean, setBoolean]= useState(true);

    return (
        <div className="container">
            <button type="button" value={boolean} onClick={(e) => {
                const curr = e.target.value;
                console.log(curr);
                setBoolean(!boolean);
                console.log(curr);
            } }>Toggle</button>
            <br />
            {boolean && (
                <div className="alert alert-danger">
                <h3>Helloo</h3>
                </div>
            )}
            <br />
            
        </div>
    );
};

export default ToggleChallenge;
