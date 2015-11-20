import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import SidebarMenu from './SidebarMenu.react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Sidebar extends Component {

  static propTypes = {
    location: PropTypes.string.isRequired,
    mainMenu: PropTypes.object.isRequired,
    profileMenu: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired
  }

  render() {
    const pathname = this.props.location;
    const sidebarOpen = this.props.ui.isSideMenuOpen;
    const miniMenu = sidebarOpen ? 'sidebar mini-menu' : 'sidebar';
    const mainMenu = this.props.mainMenu.children()
      .map((menu, i) => <SidebarMenu key={i} location={pathname} menu={menu} />);

    const profileMenu = this.props.profileMenu.children()
      .map((menu, i) => <SidebarMenu key={i} location={pathname} menu={menu} />);

    return (

      <div className={miniMenu} id="sidebar">
        <Link to='/'>
          <Image circle className='profile-pic' src="img/profile/twitter-avatar.png" />
        </Link>
        <div className="sidebar-menu nav-collapse">
          <div className="divide-20"></div>
          <ul /*className="nav nav-sidebar"*/>
            {profileMenu}
            <div className='divide-20'></div>
            {mainMenu}
            <div className='divide-20'></div>
            {/*<li className="has-sub">
              <a className="" href="#">
              <i className="fa fa-map-marker fa-fw"></i> <span className="menu-text">Maps</span>
              <span className="arrow"></span>
              </a>
              <ul className="sub">
                <li><a className="" href="google_maps.html"><span className="sub-menu-text">Google Maps</span></a></li>
                <li><a className="" href="vector_maps.html"><span className="sub-menu-text">Vector Maps</span></a></li>
              </ul>
            </li>
            <li><a className="" href="gallery.html"><i className="fa fa-picture-o fa-fw"></i> <span className="menu-text">Gallery</span></a></li>
            <li className="has-sub active">
              <a className="" href="#">
              <i className="fa fa-file-text"></i> <span className="menu-text">More Pages</span>
              <span className="arrow open"></span>
              <span className="selected"></span>
              </a>
              <ul className="sub">
                <li><a className="" href="login.html"><span className="sub-menu-text">Login & Register Option 1</span></a></li><li><a className="" href="login_bg.html"><span className="sub-menu-text">Login & Register Option 2</span></a></li>
                <li><a className="" href="user_profile.html"><span className="sub-menu-text">User profile</span></a></li>

                <li><a className="" href="chats.html"><span className="sub-menu-text">Chats</span></a></li>
                <li><a className="" href="todo_timeline.html"><span className="sub-menu-text">Todo & Timeline</span></a></li>
                <li><a className="" href="address_book.html"><span className="sub-menu-text">Address Book</span></a></li>

                <li className="current"><a className="" href="pricing.html"><span className="sub-menu-text">Pricing</span></a></li>
                <li><a className="" href="invoice.html"><span className="sub-menu-text">Invoice</span></a></li>
                <li><a className="" href="orders.html"><span className="sub-menu-text">Orders</span></a></li>
              </ul>
            </li>*/}
          </ul>
        </div>
      </div>
    );
  }
}
