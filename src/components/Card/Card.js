import React from 'react';

import './Card.css';
const Card = (props ) => {
    const {nameslist , type ,testdelete} = props

  
     const cards =nameslist.map(({name , age, location, hobbies, isMarried }) => (
 <div onClick={( event ) => testdelete(event , name)}  className="cardstyle" key={name} style={{ backgroundColor: type === "Girls" ? 'pink' : 'lightblue' } }>
     
      <h1 >{name}</h1>
      <p >{age}</p>
      <p>{location}</p>
      <p>{hobbies.join(', ')}</p>
      <p>{isMarried ? 'Married' : 'Single'}</p>
   </div>
  ))
    return (
        <div >
            {cards }
        </div>
    )
   
    
    
    
     
      
         
}
export default Card;