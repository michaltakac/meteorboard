//import './less/my-bootstrap-theme.less';
import './main.less';
import Component from 'react-pure-render/component';
import constructSidebarMenu from '../../common/lib/constructSidebarMenu';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header.react';
import Sidebar from './components/Sidebar.react';
import React, {PropTypes} from 'react';
import RouterHandler from '../../common/components/RouterHandler.react';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';
import {connect} from 'react-redux';

// // logRenderTime is useful for app with huge UI to check render performance.
// import logRenderTime from '../lib/logRenderTime';

@connect(mapStateToProps, mapDispatchToProps)
// @logRenderTime
export default class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
  }

  mainMenu() {
    const menuTitle = 'Main menu';
    const subMenu = [
      constructSidebarMenu('Submenu 1', '/#', [], 'sidebar-sub-link fa fa-circle-thin', false, false),
      constructSidebarMenu('Submenu 2', '/#', [], 'sidebar-sub-link fa fa-circle-thin', false, false),
      constructSidebarMenu('Submenu 3', '/#', [], 'sidebar-sub-link fa fa-circle-thin', false, false),
    ];
    const menuItems = [
      constructSidebarMenu('Dashboard', null, subMenu, 'fa fa-signal fa-fw', false, false),
      //constructSidebarMenu('Widgets', '/widgets', [], 'fa fa-th-large fa-fw', false, false),
      //constructSidebarMenu('Forms', '/forms', [], 'fa fa-pencil-square-o fa-fw', false, false)
    ];
    // Inject menu items into menu.
    const menu = constructSidebarMenu(menuTitle, null, menuItems, null, false, true);

    return menu;
  }

  profileMenu() {
    const menuTitle = 'Profile menu';
    const menuItems = [
      constructSidebarMenu('Profile', '#', [], 'fa fa-calendar fa-fw', false, false),
      constructSidebarMenu('Messages', '#', [], 'fa fa-calendar fa-fw', false, false),
      constructSidebarMenu('Comments', '#', [], 'fa fa-calendar fa-fw', false, false),
      constructSidebarMenu('Storage', '#', [], 'fa fa-calendar fa-fw', false, false),
      constructSidebarMenu('Calendar', '#', [], 'fa fa-calendar fa-fw', false, false)
    ];
    // Inject menu items into menu.
    const menu = constructSidebarMenu(menuTitle, null, menuItems, null, false, true);

    return menu;
  }

  render() {
    const {location: {pathname}, msg, users: {viewer}, ui, actions} = this.props;

    const sidebarOpen = ui.isSideMenuOpen;
    const className = sidebarOpen ? 'margin-left-60' : '';

    return (
      <div>
        <Header actions={actions} msg={msg} pathname={pathname} ui={ui} viewer={viewer} />
        <Sidebar location={pathname} mainMenu={this.mainMenu()} profileMenu={this.profileMenu()} ui={ui} />
        {/* Pass data-pathname to allow route specific styling. */}
        <section id='page'>
          <div className={className} id='main-content'>
            <Grid>
              <Row>
                <Col id='content' lg={12}>
                  <Row>
                    <Col md={12}>
                      <RouterHandler {...this.props} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
      </div>
    );
  }

}
