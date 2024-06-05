import { useState, useEffect } from 'react'
// const url = 'https://api.github.com/users';
const FetchData = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = await fetch(url);
                const resp = await data.json();
                console.log(resp);
                setUser(resp);
            }
            catch (error) {
                console.log(error);
            }
        }
        FetchData();
    },[]);
    return (
        <h2>hey hey</h2>
    )
};
export default FetchData;
// const FetchData = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // you can also setup function outside
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const users = await response.json();
//         console.log(users);
//         setUsers(users);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <section>
//       <h3>github users</h3>
//       <ul className='users'>
//         {users.map((user) => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <div>
//                 <h5>{login}</h5>
//                 <a href={html_url}>profile</a>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };
// export default FetchData;