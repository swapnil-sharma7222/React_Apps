import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);
    const login = () => {
        setUser({
            name: "swapnil"
        });
    }

    const logout = () => setUser(null);
    return (
        <div>

        {
            user?(
          <><h4>Hey!!, {user.name}</h4><button onClick={logout}>logout</button></>
        
      ): (
            <div>
                <h4>Please login</h4>
                <button onClick={login}>login</button>
            </div>
        )
        }
        </div>
    );
};

export default UserChallenge;
