import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalComponent extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {ui, actions} = this.props;

    return (
      <Modal show={ui.isModalOpen} onHide={actions.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>This is a modal</h4>
          <p>You can find this component inside <code>src/client/components/ModalComponent.react.js</code></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={actions.toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
