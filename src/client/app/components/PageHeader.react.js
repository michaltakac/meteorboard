import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';

export default class PageHeader extends Component {

  render() {
    return (
      <Col sm={12}>
        <div className="page-header">
          <ul className="breadcrumb">
            <li>
              <i className="fa fa-home"></i>
              <Link to="/">Home</Link>
            </li>
            <li>Widgets & Box</li>
          </ul>
          <div className="clearfix">
            <h3 className="content-title pull-left">Widgets & Box</h3>
          </div>
          <div className="description">Widget Boxes, Nested Boxes, Portlets, Draggable Portlets etc.</div>
        </div>
      </Col>
    );
  }
}
