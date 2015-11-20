import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class HeaderButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    headerButtonClass: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    notificationCount: PropTypes.number
  }

  render() {
    return (
      <div className={this.props.headerButtonClass}>
        <i className={this.props.iconName}></i>
        <span className="badge">{this.props.notificationCount}</span>
      </div>
    );
  }
}
