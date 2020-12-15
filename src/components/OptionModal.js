import React from 'react';
import Modal from 'react-modal';

class OptionModal extends React.Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render(props) {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        contentLabel="Selected Option"
      >
        <h3>Selected Option</h3>
        {this.props.selectedOption && <p>{this.props.selectedOption}</p>}
        <button onClick={this.props.handleClearSelectedOption}>Okay</button>
      </Modal>
    );
  }
}

export default OptionModal;
