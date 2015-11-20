import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Collapse} from 'react-bootstrap';

export default class SidebarProfileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenus: []
    };

  }

  static propTypes ={
    location: PropTypes.string.isRequired,
    menu: PropTypes.object.isRequired
  }

  isOpen(menu) {
    return menu.isChildActive() || this.state.openMenus.indexOf(menu) !== -1;
  }

  toggleChildren(e) {
    e.preventDefault();

    const menu = this.props.menu;
    const path = this.props.location;
    const openMenus = this.state.openMenus;

    if (openMenus.indexOf(menu) !== -1) {
      // menu is already open, the click closes it
      // except if a submenu is open
      if (menu.isChildActive(path)) {
        return;
      }

      openMenus.splice(openMenus.indexOf(menu), 1);
    } else {
      openMenus.push(menu);
    }

    this.setState({
      openMenus: openMenus
    });
  }

  render() {
    if (!this.state) {
      return null;
    }

    const menu = this.props.menu;
    const link = menu.link();
    const hasChild = menu.hasChild();
    const path = this.props.location;
    let className = (hasChild ? 'has-sub' : '') + (this.isOpen(menu) ? ' active' : '');
    let content;
    let childrenContainer;
    const icon = menu.icon()
            ? <i className={menu.icon()}></i>
            : '';
    const arrowClass = 'arrow' + (this.isOpen(menu) ? ' open' : '');
    const arrow = hasChild ? <span className={arrowClass}></span> : null;

    // Children
    if (hasChild) {
      const containerClass = 'sub' + (this.isOpen(menu) ? ' active' : '');
      const children = menu.children();
      let childrenElements = [];
      let child;

      for (let i in children) {
        child = children[i];
        childrenElements.push(<SidebarProfileMenu key={child.uuid} location={path} menu={child} />);
      }

      childrenContainer = (
        <Collapse in={this.isOpen(menu)}>
          <ul className={containerClass}>
            {childrenElements}
          </ul>
        </Collapse>
      );
    }

    // No link provided
    if (!link)
      content = (
        <a href="#" onClick={this.toggleChildren.bind(this)}>
          { icon }
          <span className="menu-text">{ menu.title() }</span>
          {arrow}
        </a>
      );
    else
      content = (
        <Link to={link}>
          { icon }
          <span className="menu-text">{ menu.title() }</span>
          {arrow}
        </Link>
      );

    return (
      <li className={className}>
        {content}

        {childrenContainer}
      </li>
    );
  }
}
