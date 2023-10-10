/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

import AddTaskForm from 'src/components/AddTaskForm';
import TaskCounter from 'src/components/TaskCounter';
import TasksList from 'src/components/TasksList';

import tasksList from 'src/data/tasks';

// == Import
import './app.scss';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksList,
      inputText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
  }

  handleInputChange(inputText) {
    this.setState({
      inputText,
    });
  }

  handleFormSubmit(event) {
    const { inputText, tasks } = this.state;

    const ids = tasks.map((task) => task.id);
    const maxId = Math.max(...ids);

    event.preventDefault();
    const newTask = {
      id: maxId + 1,
      label: inputText,
      done: false,
    };

    const newTasks = [
      ...tasks,
      newTask,
    ];

    this.setState({
      tasks: newTasks,
    });
  }

  handleTaskStatusChange(taskId) {
    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { inputText, tasks } = this.state;
    const numberOfInProgressTasks = tasks.filter((task) => !task.done).length;
    const unSortedTasks = [...tasks];
    const sortedTasks = unSortedTasks.sort((a, b) => a.done - b.done);

    return (
      <div className="app">
        <AddTaskForm
          value={inputText}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <TaskCounter
          taskAmount={numberOfInProgressTasks}
        />
        <TasksList
          tasks={sortedTasks} 
          onChangeTaskStatus={this.handleTaskStatusChange}
        />
      </div>
    );
  }
}

// == Export
export default App;
