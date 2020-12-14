class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Indecision App</h1>
          <h2>Put your life in hands of the computer</h2>
        </div>
        <div>
          <button>What should I do?</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
