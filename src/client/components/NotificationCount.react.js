import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class SidebarNotification extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  }

  render() {
    return (
      <span className="badge">{this.props.count}</span>
    );
  }
}

