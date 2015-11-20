import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import HeaderButton from './components/HeaderButton.react';
import {Image, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    ui: PropTypes.object.isRequired,
    viewer: PropTypes.object
  }

  render() {
    const {msg: {app: {links: msg}}, viewer, actions, ui} = this.props;
    const QuitButton = <HeaderButton iconName='fa fa-power-off' />;
    const NotificationButton = <HeaderButton iconName='fa fa-envelope' notificationCount={3} />;
    const arrowOrientation = ui.isSideMenuOpen ? 'fa fa-angle-right' : 'fa fa-angle-left';
    const navbarClassName = ui.isSideMenuOpen
          ? 'navbar clearfix mini-menu-open'
          : 'navbar clearfix';

    return (
      <header className={navbarClassName} id='header'>
          <div className='nav navbar-nav pull-left hidden-xs' id='navbar-left'>

            <div className='sidebar-collapse btn pull-left' onClick={actions.toggleSideMenu}>
              <i className={arrowOrientation}></i>
            </div>
            <div className='header-search form-group'>
              <div className='icon-addon addon-lg'>
                <input className='form-control' id='search' placeholder='Search...' type='text' />
                <label className='glyphicon glyphicon-search' title='Search'></label>
              </div>
            </div>
          </div>

          <ul className='nav navbar-nav pull-right'>
            <NavDropdown className='header-icon header-notifications' eventKey={1} id='header-nottifications' noCaret title={NotificationButton}>
              <li className='dropdown-title'>
                <span><i className='fa fa-envelope-o'></i> 3 Messages</span>
                <span className='compose pull-right tip-right' title='Compose message'><i className='fa fa-pencil-square-o'></i></span>
              </li>
              <li>
                <Link to='#'>
                  <img src='img/avatars/avatar2.jpg' />
                  <span className='body'>
                    <span className='from'>Jane Doe</span>
                    <span className='message'>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mole ...
                    </span>
                    <span className='time'>
                      <i className='fa fa-clock-o'></i>
                      <span>Just Now</span>
                    </span>
                  </span>

                </Link>
              </li>
              <li>
                <Link to='#'>
                  <img src='img/avatars/avatar1.jpg' />
                  <span className='body'>
                    <span className='from'>Vince Pelt</span>
                    <span className='message'>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mole ...
                    </span>
                    <span className='time'>
                      <i className='fa fa-clock-o'></i>
                      <span>15 min ago</span>
                    </span>
                  </span>

                </Link>
              </li>
              <li>
                <Link to='#'>
                  <img src='img/avatars/avatar8.jpg' />
                  <span className='body'>
                    <span className='from'>Debby Doe</span>
                    <span className='message'>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mole ...
                    </span>
                    <span className='time'>
                      <i className='fa fa-clock-o'></i>
                      <span>2 hours ago</span>
                    </span>
                  </span>

                </Link>
              </li>
              <li className='footer'>
                <a href='#'>See all messages <i className='fa fa-arrow-circle-right'></i></a>
              </li>
            </NavDropdown>
            <NavDropdown className='header-icon header-quit' eventKey={2} id='header-quit' noCaret title={QuitButton}>
              <li>
                <Link to='#'>
                  <span className='body'>
                    Logout
                  </span>
                </Link>
              </li>
            </NavDropdown>
          </ul>
      </header>
      /*<Navbar>
        <NavBrand><a href='#'>Meteorboard</a></NavBrand>
        <Nav>
          <NavItem eventKey={1} href='#'>Link</NavItem>
          <NavItem eventKey={2} href='#'>Link</NavItem>
          <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>*/
      /*<header>
        <h1>
          <Link to='/'>{msg.home}</Link>
        </h1>
        <ul>
          <li><Link activeClassName='active' to='/todos'>{msg.todos}</Link></li>
          <li><Link activeClassName='active' to='/me'>{msg.me}</Link></li>
          {!viewer &&
            <li><Link activeClassName='active' to='/login'>{msg.login}</Link></li>
          }
        </ul>
      </header>*/
    );
  }

}
