import React , {useState , useRef}  from 'react';
import Filters from '../Filters/Filters.js';
// import { type } from '@testing-library/user-event/dist/type';
 

import Card from '../Card/Card.js';
import './App.css';
// import { useState } from 'react';
const App  = ( ) => {
 const [searchfilter, setSearch] = useState('');
  const [showcard, setShow] = useState(false);
  const [boys, setName] = useState([
   { name: 'ali',
    age:  20,
    location: 'Tunis',
    hobbies: ['reading', 'sports'],
    isMarried: false,},
    { name: 'test',
    age:  20,
    location: 'Tunis',
    hobbies: ['reading', 'sports'],
    isMarried: false,}
    , { name: 'ahmed',
    age:  20,
    location: 'a',
    hobbies: ['reading', 'sports'],
    isMarried: false,}
  ]);
  const deleteitem = (event ,  name) => {
    setName((prevBoys) => {
      return prevBoys.filter((boy) => boy.name !== name);
    });
  }
   

  //   // event.preventDefault();
  //   // const updatedBoys = boys.filter((boy) => boy.name !== name);
  //   // setName(updatedBoys);
  //   // console.log(name);
   
  
   
   




  
     
  // };
  //  const additem = (event ,  name) => {
  //   setName((prevBoys) => {
  //     return [...prevBoys, { name: name, age: 20, location:  'Tunis', hobbies: ['reading', 'sports'], isMarried: false }];
  //   });
   
  //   // event.preventDefault();
  //   // const updatedBoys = boys.filter((boy) => boy.name !== name);
  //   // setName(updatedBoys);
  //   // console.log(name);
   
  
   
   




  
     
  // };
  //  const searchfilterhandler = (event) => {
  //   setSearch(event.target.value);
  //   setShow(true);
  //   // console.log(event.target.value);
  //   // console.log(searchfilter);
  // }

//  const boys = 
//   const girls = [
//    { name: 'sara',
//     age:  20,
//     location: 'Tunis',
//     hobbies: ['reading', 'sports'],
//     isMarried: false,}
//     , { name: 'amina',
//     age:  20,
//     location: 'a',
//     hobbies: ['reading', 'sports'],
//     isMarried: false,}
//   ]
  
  
// const filtersearch =  (name) => {
//   return  setSearch(name); ;
//   // const filtered = boys.filter((boy) => boy.name === name);
//   // setName(filtered);
// }
const filtername = (name) => {
  setSearch(name);}
const namehandler = () => { 
  if (searchfilter === '') {
    return boys;
  } else {
    return boys.filter((boy) => boy.name.includes(searchfilter));
  }
} 
  
  return (
    
    <div  className = "title"  >
      <h1  >My App </h1>
      <h2>List of Boys</h2>
      <Filters filtersearch = {filtername }   />
      {/* <input type="text" ref={inputRef} placeholder="Enter name" onChange={()=> console.log(inputRef.current.value)} /> */}
  
      <button onClick={() => setShow(!showcard)}>{showcard ? 'Hide' : 'Show'}</button>
     <div className= {showcard ? "show" : "hide"} >

    
     <Card
      nameslist = {namehandler()} 
      type="Boys"   /> 
      </div>
      <h2>List of Girls</h2>
     {/* <Card nameslist = {girls} type='Girls' />  */}
    
     <Cardd/>
     
    </div>
    

  );
};

const Cardd= ({name})=>{
  return <h2>{name}</h2>
}


export default App;