import React from 'react';
import PropTypes from 'prop-types';

import './taskslist.scss';
import Task from './Task';

const TasksList = ({ tasks, onChangeTaskStatus }) => (
  <section>
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          label={task.label}
          done={task.done}
          id={task.id}
          onChangeTaskStatus={onChangeTaskStatus}
        />
      ))}
    </ul>
  </section>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onChangeTaskStatus: PropTypes.func.isRequired,
};

export default TasksList;
