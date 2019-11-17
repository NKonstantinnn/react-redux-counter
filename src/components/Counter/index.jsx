import React from 'react';

export const Counter = () => {
    return (
      <div className="jumbotron">
        <h2>0</h2>
        <button className="btn btn-primary btn-lg">
            DEC
        </button>
        <button className="btn btn-primary btn-lg">
            INC
        </button>
      </div>
    );
};
