import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clear = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAll = () => {
    setPeople([]);
    if(people.length=== 0){
        alert("no data left");
    }
  };
  return (
    <div>
        {people.map((person) => {
            const { id, name } = person;
            return (
                <div>
                    <h4 key={id} className="item">
                    {name}
                    </h4>
                    <button className="btn" onClick={() => clear(id)}>
                    Clear
                    </button>
                </div>
            );
        })}
        <button className="btn" onClick={clearAll}>
            Clear All
        </button>
    </div>
  );
};

// const UseStateArray = () => {
//     const [people, setPeople] = useState(data);

//     const removeItem = (id) => {
//       let newPeople = people.filter((person) => person.id !== id);
//       setPeople(newPeople);
//     };
//     return (
//       <div>
//         {people.map((person) => {
//           const { id, name } = person;
//           return (
//             <div key={id} className='item'>
//               <h4>{name}</h4>
//               <button onClick={() => removeItem(id)}>remove</button>
//             </div>
//           );
//         })}
//         <button
//           className='btn'
//           style={{ marginTop: '2rem' }}
//           onClick={() => setPeople([])}
//         >
//           clear items
//         </button>
//       </div>
//     );
//   };

export default UseStateArray;
