import React from 'react';
import {connect} from 'react-redux';
import {inc, dec} from '../../actions';

export const Counter = ({count, inc, dec}) => {
    return (
      <div className="jumbotron">
        <h2>{count}</h2>
        <button 
          id="dec-btn"
          className="btn btn-primary btn-lg"
          onClick={dec}>
            DEC
        </button>
        <button 
          id="inc-btn"
          className="btn btn-primary btn-lg"
          onClick={inc}>
            INC
        </button>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    count: state
  };
};

const mapDispatchToProps = {
  inc, 
  dec
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
