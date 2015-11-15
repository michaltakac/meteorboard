import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';

export default class Box extends Component {

  static propTypes = {
    bodyClass: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    gridWidth: PropTypes.number.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    titleClass: PropTypes.string.isRequired
  }

  render() {
    const {bodyClass, children, gridWidth, icon, title, titleClass} = this.props;

    const titleIcon = icon ? <i className={icon}></i> : '';

    return (
      <Col className="box-container" sm={gridWidth}>
        <div className={titleClass}>
          <div className="box-title">
            <h4>{titleIcon}{title}</h4>
            <div className="tools">
              <a className="config" data-toggle="modal" href="#box-config">
                <i className="fa fa-cog"></i>
              </a>
            </div>
          </div>
          <div className={bodyClass}>
            {children}
          </div>
        </div>
      </Col>
    );
  }
}
