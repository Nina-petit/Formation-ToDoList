/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Task = ({ label, done, id, onChangeTaskStatus }) => (
  <li>
    <label
      className={classNames('list-item', { 'list-item--done': done })}
    >
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChangeTaskStatus(id)}
      />
      {label}
    </label>
  </li>
);

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onChangeTaskStatus: PropTypes.func.isRequired,
};

export default Task;
