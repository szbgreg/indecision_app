class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <button>What should I do?</button>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in hands of the computer</h2>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
