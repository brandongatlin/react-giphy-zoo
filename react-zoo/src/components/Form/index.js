import React from "react";

const Form = props => {
  return (
    <div>
      <input type='text' value={props.val} onChange={props.inputChange} />
      <button type='submit' onClick={props.submitInput}>
        Submit
      </button>
    </div>
  );
};

export default Form;
