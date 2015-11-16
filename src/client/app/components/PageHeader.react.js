import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';

export default class PageHeader extends Component {
  static propTypes = {
    description: PropTypes.string,
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <Col sm={12}>
        <div className="page-header">
          <ul className="breadcrumb">
            <li>
              <i className="fa fa-home"></i>
              <Link to="/">Home</Link>
            </li>
            <li>{this.props.title}</li>
          </ul>
          <div className="clearfix">
            <h3 className="content-title pull-left">{this.props.title}</h3>
          </div>
          <div className="description">{this.props.description}</div>
        </div>
      </Col>
    );
  }
}
