import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = () => (
  <div className="button-container">
    <p className="button-value">{}</p>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;