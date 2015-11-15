import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class HeaderButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    badgeNumber: PropTypes.number,
    iconName: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <i className={this.props.iconName}></i>
        <span className="badge">{this.props.badgeNumber}</span>
      </div>
    );
  }
}
