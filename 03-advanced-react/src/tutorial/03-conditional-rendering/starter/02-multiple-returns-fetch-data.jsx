// import { useEffect, useState } from 'react';
// const url = 'https://api.github.com/users/QuincyLarson';

// const MultipleReturnsFetchData = () => {
//   // convention to setup booleans with isSomething
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const resp = await fetch(url);
//         const user = await resp.json();
//         console.log(resp);
//         setUser(user);
//       } catch (error) {
//         setIsError(true);
//         console.log(error);
//       }
//       // hide loading
//       setIsLoading(false);
//     };
//     fetchUser();
//   }, []);
//   // order matters
//   // don't place user JSX before loading or error
//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }
//   if (isError) {
//     return <h2>There was an error...</h2>;
//   }
//   return (
//     <div>
//       <img
//         style={{ width: '150px', borderRadius: '25px' }}
//         src={user.avatar_url}
//         alt={user.name}
//       />
//       <h2>{user.name}</h2>
//       <h4>works at {user.company}</h4>
//       <p>{user.bio}</p>
//     </div>
//   );
// };
// export default MultipleReturnsFetchData;


import { useState } from 'react';

const ShortCircuitEvaluation = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  // can't use if statements
  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className='btn'>log out</button>
    </div>
  );
};
export default ShortCircuitEvaluation;