 import React, { Fragment } from 'react';
 import './Modal.css';
  import ReactDOM from 'react-dom';
 const Modal = ( {show , onClose}) => {
    // const ModalRoot = ReactDOM.createRoot(document.getElementById('modal-root'));
    return ( 
        
    show &&

        <Fragment >
    
       
    {    ReactDOM.createPortal(
    
       
          <Fragment>
              
          <div className="backdrop" onClick={onClose}>
           </div>
           <div className="overlay"> 
            <div className="modal">
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
                <button onClick={onClose}>Close</button>
            </div>

          </div>
            

        </Fragment> , document.getElementById('ModalRoot')) 
           
    }
        </Fragment>
        );
 }
  
 export default Modal;