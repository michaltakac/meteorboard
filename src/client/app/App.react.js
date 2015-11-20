//import './less/my-bootstrap-theme.less';
import './main.less';
import Component from 'react-pure-render/component';
import createSidebarMenu from '../../common/lib/createSidebarMenu';
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
    const test = {
      name: 'Main menu',
      menuItems: [
        {
          title: 'Dashboard',
          link: null,
          children: [
            {
              title: 'Submenu 1',
              link: '#',
              children: [],
              icon: 'sidebar-sub-link fa fa-circle-thin'
            },
            {
              title: 'Submenu 2',
              link: '#',
              children: [],
              icon: 'sidebar-sub-link fa fa-circle-thin'
            },
            {
              title: 'Submenu 3',
              link: '#',
              children: [],
              icon: 'sidebar-sub-link fa fa-circle-thin'
            }
          ],
          icon: 'fa fa-signal fa-fw'
        }
      ]
    };

    return createSidebarMenu(test);
  }

  profileMenu() {
    const test = {
      name: 'Profile menu',
      menuItems: [
        {
          title: 'Profile',
          link: '#',
          children: [],
          icon: 'fa fa-user fa-fw',
        },
        {
          title: 'Messages',
          link: '#',
          children: [],
          icon: 'fa fa-envelope-o fa-fw',
        },
        {
          title: 'Comments',
          link: '#',
          children: [],
          icon: 'fa fa-comment-o fa-fw',
        },
        {
          title: 'Storage',
          link: '#',
          children: [],
          icon: 'fa fa-database fa-fw',
        },
        {
          title: 'Calendar',
          link: '#',
          children: [],
          icon: 'fa fa-calendar fa-fw',
        }
      ]
    };

    return createSidebarMenu(test);
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
