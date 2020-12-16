import React from 'react';

export const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.text}
      </p>

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
