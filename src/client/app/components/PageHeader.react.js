import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';

export default class PageHeader extends Component {
  static propTypes = {
    description: PropTypes.string,
    menu: PropTypes.object,
    title: PropTypes.string.isRequired
  }

  hasMenu() {
    return this.props.menu ? true : false;
  }

  getmenu() {
    const menu = this.hasMenu()
          ? <div className='page-header-menu'>
              <ul>
              {this.props.menu.map((menu) =>
                <Link to={menu.link}>
                  <li className='page-header-menu-item'>{menu.title}</li>
                </Link>
              )}
              </ul>
            </div>
          : '';

    return menu;
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
          {this.getmenu()}
        </div>
      </Col>
    );
  }
}
