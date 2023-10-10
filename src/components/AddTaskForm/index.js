import React from 'react';
import PropTypes from 'prop-types';

import './addtaskform.scss';

const AddTaskForm = ({ value, onInputChange, onFormSubmit }) => (
  <form
    className="form"
    onSubmit={onFormSubmit}
  >
    <input
      value={value}
      onChange={(event) => onInputChange(event.target.value)}
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
    />
  </form>
);

AddTaskForm.propTypes = {
  value: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default AddTaskForm;
