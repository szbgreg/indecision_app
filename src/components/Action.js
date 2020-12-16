import React from 'react';

export const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOption}
      >
        What should I do?
      </button>
    </div>
  );
};
