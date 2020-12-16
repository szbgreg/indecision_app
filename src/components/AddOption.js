import React from 'react';

export default class AddOption extends React.Component {
  // Before using transform-class-properties plugin

  /*   constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  } */

  // After using transform-class-properties plugin
  state = { error: undefined };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">
            Add option
          </button>
        </form>
      </div>
    );
  }
}
