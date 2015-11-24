import Component from 'react-pure-render/component';
import ModalComponent from './ModalComponent.react';
import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';

export default class Box extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    bodyClass: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    titleClass: PropTypes.string.isRequired,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, bodyClass, children, icon, title, titleClass, ui} = this.props;

    const titleIcon = icon ? <i className={icon}></i> : '';

    return (
      <div>
        <ModalComponent actions={actions} ui={ui}/>
        <div className={titleClass}>
          <div className="box-title">
            <h4>{titleIcon}{title}</h4>
            <div className="tools">
              <a className="config" data-toggle="modal" onClick={actions.toggleModal}>
                <i className="fa fa-cog"></i>
              </a>
            </div>
          </div>
          <div className={bodyClass}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
