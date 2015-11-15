//import './less/my-bootstrap-theme.less';


import './main.less';
import Component from 'react-pure-render/component';
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

  getMenu(title, link, children = [], icon = null, isActive = false, isChildActive = false) {
    const uuid =  Math.random();

    return {
      uuid: uuid,
      title: () => title,
      isActive: () => isActive,
      isChildActive: () => isChildActive,
      link: () => link,
      icon: () => icon,
      hasChild: () => !!children.length,
      children: () => children
    };
  }

  createMenu() {
    let subMenu = this.getMenu('Link', 'something', [], null, true);
    let child1 = this.getMenu('Post', null, [subMenu], 'fa fa-file-text fa-fw', false, false);
    let child2 = this.getMenu('Widgets', '/widgets', [], 'fa fa-th-large fa-fw', false);
    let child3 = this.getMenu('Forms', '/forms', [], 'fa fa-pencil-square-o fa-fw', false);
    let menu = this.getMenu('Menu', null, [child1, child2, child3], null, false, true);

    return menu;
  }

  render() {
    const {location: {pathname}, msg, users: {viewer}, ui, actions} = this.props;

    const sidebarOpen = ui.isSideMenuOpen;
    const className = sidebarOpen ? 'margin-left-50' : '';

    return (
      <div>
        <Header actions={actions} msg={msg} pathname={pathname} viewer={viewer} ui={ui} />
        {/* Pass data-pathname to allow route specific styling. */}
        <section id="page">
          <Sidebar location={pathname} menuViews={this.createMenu()} ui={ui} />
          <div className={className} id="main-content">
            <Grid>
              <Row>
                <Col id="content" lg={12}>
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
        {/*<div className="container-fluid" data-pathname={pathname}>
          <div className="row">
            {/* Pathname enforces rerender so activeClassName is updated.
            <Header msg={msg} pathname={pathname} viewer={viewer} />
            <RouterHandler {...this.props} />
            <Footer msg={msg.app.footer} />
          </div>
        </div>*/}
      </div>
    );
  }

}
