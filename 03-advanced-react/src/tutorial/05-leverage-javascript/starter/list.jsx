import { people } from '../../../data';
import Person from './person'
const List = () => {
    return (
        <div>
            {people.map((person)=> (
                <Person key= {person.name} {...person} />
            ))}
        </div>
    );
}

export default List