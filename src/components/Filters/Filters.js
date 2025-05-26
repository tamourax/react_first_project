import React , { useRef , useState} from "react";
import './Filters.css';


const Filters = ({filtersearch}) => {
    const [name, setName] = useState('');
    const filterhandler = (event) => {
        setName(event.target.value);
        filtersearch(event.target.value);
        // console.log(event.target.value);
        // console.log(name);
    }
    //  const inputRef = useRef(null);
  return (
     <div>
    <input   className="filters" type="text" onChange={filterhandler} value={name} />
    {/* <button onClick={() => additem(inputRef.current.value)}>Add</button> */}
    </div>
  )
}

export default Filters
