import Box from '../components/Box.react';
import ChartsSettings from './charts';
import ChatWidget from '../components/ChatWidget.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Row, Col, Panel, Table} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../../common/components/FooterTools.react';
import PageHeader from '../components/PageHeader.react';
import {Line} from 'rc-chartjs';
//import {FormattedHTMLMessage} from 'react-intl';
//import {Link} from 'react-router';

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, msg: {home: msg}, ui} = this.props;
    const tableData = msg.stubData.map(({firstName, lastName, username}, i) =>
        <tr>
          <td>{i + 1}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{username}</td>
        </tr>
      );

    return (
      <div>
        <Helmet title={msg.title} />
        <Row>
          <PageHeader description={msg.description} menu={msg.menu} title={msg.title} />
        </Row>
        <Row>
          <Col sm={6}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Basic form elements'
              titleClass='box border'
              ui={ui}
            >
              <div className='chart'>
                <Line data={ChartsSettings.lineChart.data} options={ChartsSettings.lineChart.options} />
              </div>
            </Box>
          </Col>
          <Col sm={6}>
            <Panel>
              <Table bordered condensed hover striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData}
                </tbody>
              </Table>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <ChatWidget
              actions={actions}
              title='Chat widget'
              titleClass='box border primary'
              ui={ui}
            />
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }

}
