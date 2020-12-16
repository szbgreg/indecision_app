import React from 'react';

export const Option = (props) => {
  return (
    <div>
      {props.text}
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.text);
        }}
      >
        Remove
      </button>
    </div>
  );
};
