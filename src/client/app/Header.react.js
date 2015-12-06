import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import HeaderButton from '../components/HeaderButton.react';
import {Image, NavDropdown, MenuItem} from 'react-bootstrap';

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
    const NotificationButton = <HeaderButton iconName='fa fa-bell' notificationCount={3} />;
    const arrowOrientation = ui.isSideMenuOpen ? 'fa fa-angle-right' : 'fa fa-angle-left';
    const navbarClassName = ui.isSideMenuOpen
          ? 'navbar clearfix mini-menu-open'
          : 'navbar clearfix';

    return (
      <header className={navbarClassName} id='header'>
          <div className='nav navbar-nav pull-left' id='navbar-left'>

            {/* Here we call action from onClick event. */}
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
                <span>Recent activity</span>
              </li>
              <MenuItem href='#'>
                  <Image src='img/profile/twitter-avatar.png' />
                  <span className='body'>
                    <span className='message'>
                      @michaltakac started following you.
                    </span>
                    <span className='time'>
                      <span>29 minutes ago.</span>
                    </span>
                  </span>

              </MenuItem>
              <MenuItem href='#'>
                  <Image src='img/profile/twitter-avatar.png' />
                  <span className='body'>
                    <span className='message'>
                      @michaltakac commented on your profile.
                    </span>
                    <span className='time'>
                      <span>39 minutes ago</span>
                    </span>
                  </span>

              </MenuItem>
              <MenuItem href='#'>
                  <Image src='img/profile/twitter-avatar.png' />
                  <span className='body'>
                    <span className='message'>
                      @michaltakac added you to "Work" spreadsheet.
                    </span>
                    <span className='time'>
                      <span>55 minutes ago</span>
                    </span>
                  </span>
              </MenuItem>
              {/*<MenuItem className='footer' href='#'>
                See all messages <i className='fa fa-arrow-circle-right'></i>
              </MenuItem>*/}
            </NavDropdown>
            <NavDropdown className='header-icon header-quit' eventKey={2} id='header-quit' noCaret title={QuitButton}>
              <MenuItem href='/'>Logout</MenuItem>
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
