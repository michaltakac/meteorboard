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
    const NotificationButton = <HeaderButton badgeNumber={3} iconName='fa fa-envelope' />;
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
            <NavDropdown className='header-message' eventKey={4} id='header-message' noCaret title={NotificationButton}>
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

            <li className='dropdown' id='header-message'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
              <i className='fa fa-envelope'></i>
              <span className='badge'>3</span>
              </a>
              <ul className='dropdown-menu inbox'>
                <li className='dropdown-title'>
                  <span><i className='fa fa-envelope-o'></i> 3 Messages</span>
                  <span className='compose pull-right tip-right' title='Compose message'><i className='fa fa-pencil-square-o'></i></span>
                </li>
                <li>
                  <a href='#'>
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

                  </a>
                </li>
                <li>
                  <a href='#'>
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

                  </a>
                </li>
                <li>
                  <a href='#'>
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

                  </a>
                </li>
                <li className='footer'>
                  <a href='#'>See all messages <i className='fa fa-arrow-circle-right'></i></a>
                </li>
              </ul>
            </li>

            <li className='dropdown' id='header-tasks'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
              <i className='fa fa-tasks'></i>
              <span className='badge'>3</span>
              </a>
              <ul className='dropdown-menu tasks'>
                <li className='dropdown-title'>
                  <span><i className='fa fa-check'></i> 6 tasks in progress</span>
                </li>
                <li>
                  <a href='#'>
                    <span className='header clearfix'>
                      <span className='pull-left'>Software Update</span>
                      <span className='pull-right'>60%</span>
                    </span>
                    <div className='progress'>
                      <div className='progress-bar progress-bar-success' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '60%'}}>
                      <span className='sr-only'>60% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='header clearfix'>
                      <span className='pull-left'>Software Update</span>
                      <span className='pull-right'>25%</span>
                    </span>
                    <div className='progress'>
                      <div className='progress-bar progress-bar-info' role='progressbar' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100' style={{width: '25%'}}>
                      <span className='sr-only'>25% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='header clearfix'>
                      <span className='pull-left'>Software Update</span>
                      <span className='pull-right'>40%</span>
                    </span>
                    <div className='progress progress-striped'>
                      <div className='progress-bar progress-bar-warning' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style={{width: '40%'}}>
                      <span className='sr-only'>40% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='header clearfix'>
                      <span className='pull-left'>Software Update</span>
                      <span className='pull-right'>70%</span>
                    </span>
                    <div className='progress progress-striped active'>
                      <div className='progress-bar progress-bar-danger' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: '70%'}}>
                      <span className='sr-only'>70% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='header clearfix'>
                      <span className='pull-left'>Software Update</span>
                      <span className='pull-right'>65%</span>
                    </span>
                    <div className='progress'>
                      <div className='progress-bar progress-bar-success' style={{width: '35%'}}>
                      <span className='sr-only'>35% Complete (success)</span>
                      </div>
                      <div className='progress-bar progress-bar-warning' style={{width: '20%'}}>
                      <span className='sr-only'>20% Complete (warning)</span>
                      </div>
                      <div className='progress-bar progress-bar-danger' style={{width: '10%'}}>
                      <span className='sr-only'>10% Complete (danger)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='footer'>
                  <a href='#'>See all tasks <i className='fa fa-arrow-circle-right'></i></a>
                </li>
              </ul>
            </li>

            <li className='dropdown user' id='header-user'>
              <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
                <img src='img/avatars/avatar3.jpg' />
                <span className='username'>John Doe</span>
                <i className='fa fa-angle-down'></i>
              </a>
              <ul className='dropdown-menu'>
                <li><a href='#'><i className='fa fa-user'></i> My Profile</a></li>
                <li><a href='#'><i className='fa fa-cog'></i> Account Settings</a></li>
                <li><a href='#'><i className='fa fa-eye'></i> Privacy Settings</a></li>
                <li><a href='login.html'><i className='fa fa-power-off'></i> Log Out</a></li>
              </ul>
            </li>
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
