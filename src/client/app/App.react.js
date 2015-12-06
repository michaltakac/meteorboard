import Component from 'react-pure-render/component';
import createSidebarMenu from '../lib/createSidebarMenu';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header.react';
import Sidebar from '../components/Sidebar.react';
import React, {PropTypes} from 'react';
import RouterHandler from '../../common/components/RouterHandler.react';
import * as ProfileMenu from './ProfileMenu';
import * as MainMenu from './MainMenu';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';
import {connect} from 'react-redux';
// Styles
import '../stylesheets/main.less';

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

  createMenu(menu) {
    return createSidebarMenu(menu);
  }

  render() {
    const {location: {pathname}, msg, users: {viewer}, ui, actions} = this.props;

    const sidebarOpen = ui.isSideMenuOpen;
    const className = sidebarOpen ? 'margin-left-60' : '';

    return (
      <div>
        <Header actions={actions} msg={msg} pathname={pathname} ui={ui} viewer={viewer} />
        <Sidebar location={pathname} mainMenu={this.createMenu(MainMenu)} profileMenu={this.createMenu(ProfileMenu)} ui={ui} />
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
