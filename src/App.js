import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      selected: null,
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  selectedTaskIndex = () => this.selected && this.tasks.findIndex(a => this.selected === a.name);

  handleSelect = taskName => {
    this.setState({selected: taskName});
  }

  handleBack = () => {
    const {tasks, selected} = this.state.tasks;
    let newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i];
      if (t.name === selected) {
        newTasks.push({name: t.name, stage: t.stage - 1});
      } else {
        newTasks.push(t);
      }
      this.setState({tasks: newTasks});
    }
  }

  handleForward = () => {
    const {tasks, selected} = this.state.tasks;
    let newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i];
      if (t.name === selected) {
        newTasks.push({name: t.name, stage: t.stage + 1});
      } else {
        newTasks.push(t);
      }
      this.setState({tasks: newTasks});
    }
  }
  render() {
    const { tasks, selected } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }
    
    let moves = 0;
    if (selected) {
        let i = tasks.findIndex(a => selected === a.name);
        if (0 === tasks[i].stage) {
          moves = -1;
        } else if ((NUM_STAGES - 1) === tasks[i].stage) {
          moves = +1;
        }
    }


    return (
      <div className="App">
        <Controls 
          selected={selected}
          moves={moves} 
          onBack={this.handleBack}
          onForward={this.handleForward}/>
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          selectFunc={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
