import React from "react";

const Form = props => {
  return (
    <div className='form'>
      <input
        className='input'
        type='text'
        value={props.val}
        onChange={props.inputChange}
      />
      <button className='input' type='submit' onClick={props.submitInput}>
        Submit
      </button>
    </div>
  );
};

export default Form;
