import React from 'react';
import PropTypes from 'prop-types';

export default function TextField(id,){
  /**
   * 
   */
    return (
        <div className = {`list-item`}>
            
                <input 
                   id = ""
                   type="text"
                   name = "textbox"
                   size="30"
                />
            
          
        </div>
    );
}

 TextField.propTypes = {
    /** Composition of the task */
    textfield: PropTypes.shape({
      /** Id of the task */
      id: PropTypes.string.isRequired,
      
    }),
    /** Event to change the task to archived */
   // onArchiveTask: PropTypes.func,
    /** Event to change the task to pinned */
    //onPinTask: PropTypes.func,
   };