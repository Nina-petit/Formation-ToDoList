import React from 'react';
import PropTypes from 'prop-types';

import './taskcounter.scss';

const TaskCounter = ({ taskAmount }) => (
  <p className="counter"> {taskAmount} tâches en cours </p>
);

TaskCounter.propTypes = {
  taskAmount: PropTypes.number.isRequired,
};

export default TaskCounter;
