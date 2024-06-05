import { people } from '../../../data';
import img from './../../../assets/default-avatar.svg'
const Person = ({name, nickName= "Ashutosh Gupta", images}) => {
    return (
        <div className="container">
            <img src={images?.[0]?.small?.url || img} alt={name} style={{ width: '50px' }} />
            <h4>{name}</h4>
            <h4>nickname: {nickName}</h4>
        </div>
    );
}

export default Person