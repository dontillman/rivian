import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selected, moves, onBack, onForward } = this.props;

    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        moves: {moves}
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={selected && ''} />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!selected || (-1 == moves)}
            data-testid="move-back-btn"
            onClick={onBack}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!selected || (+1 == moves)}
            data-testid="move-forward-btn"
            onClick={onForward}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
