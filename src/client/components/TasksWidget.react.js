import Component from 'react-pure-render/component';
import Divider from './Divider.react';
import React, {PropTypes} from 'react';
import {Button, Col, Image, ProgressBar} from 'react-bootstrap';
import {Link} from 'react-router';

export default class TasksWidget extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    titleClass: PropTypes.string.isRequired,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, icon, title, titleClass, ui} = this.props;
    const titleIcon = icon ? <i className={icon}></i> : '';

    return (
      <div className={titleClass}>
        <div className="box-title">
          <h4>{titleIcon}{title}</h4>
        </div>
        <div className="box-tasks">
          <div className="scroller" style={{height: '320px'}}>
            <ul className="tasks-list tasks">
              <li className="tasks-list-item">
                <h4>Server maintenance</h4>
                <p><i className="fa fa-clock-o"></i>Due: 20/12/2015 - 100% (completed)</p>
                <ProgressBar bsStyle="primary" now={100} />
              </li>
              <li className="tasks-list-item">
                <h4>Presentation for Q4</h4>
                <p><i className="fa fa-clock-o"></i>Due: 18/12/2015 - 60%</p>
                <ProgressBar bsStyle="success" now={60} />
              </li>
              <li className="tasks-list-item">
                <h4>New feature</h4>
                <p><i className="fa fa-clock-o"></i>Due: 16/12/2015 - 40%</p>
                <ProgressBar bsStyle="warning" now={40} />
              </li>
              <li className="tasks-list-item">
                <h4>Conference presentation</h4>
                <p><i className="fa fa-clock-o"></i>Due: 12/12/2015 - 20%</p>
                <ProgressBar bsStyle="danger" now={20} />
              </li>
              <li className="tasks-list-item">
                <h4>Spending review</h4>
                <p><i className="fa fa-clock-o"></i>Due: 12/12/2015 - 40%</p>
                <ProgressBar bsStyle="warning" now={40} />
              </li>
            </ul>
          </div>

          <Divider height={2} />

          <div className="tasks-list-footer">
            <Link to="#">See all tasks <i className="fa fa-arrow-circle-right"></i></Link>
          </div>
        </div>
      </div>
    );
  }
}
