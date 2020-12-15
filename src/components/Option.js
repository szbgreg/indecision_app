import React from 'react';

export const Option = (props) => {
  return (
    <div>
      {props.text}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.text);
        }}
      >
        Remove
      </button>
    </div>
  );
};
