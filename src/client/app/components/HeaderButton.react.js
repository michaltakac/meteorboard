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
    const {headerButtonClass, iconName, notificationCount} = this.props;

    const notification = notificationCount
            ? <span className="badge">{this.props.notificationCount}</span>
            : '';

    return (
      <div className={headerButtonClass}>
        <i className={iconName}></i>
        {notification}
      </div>
    );
  }
}
