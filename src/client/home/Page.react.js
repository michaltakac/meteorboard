import Box from '../components/Box.react';
import ChartsSettings from './charts';
import ChatWidget from '../components/ChatWidget.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Row, Col, Panel, Tab, Tabs, Table} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import TasksWidget from '../components/TasksWidget.react';
import FooterTools from '../../common/components/FooterTools.react';
import PageHeader from '../components/PageHeader.react';
import {Bar, Doughnut, Line, Pie} from 'rc-chartjs';
import {Sparklines, SparklinesBars} from 'react-sparklines';
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
          <Col md={8}>
            <Box
              bodyClass='box-body'
              title='Visualizations'
              titleClass='box border primary'
              {...this.props}
            >
              <div className='chart'>
                <Line data={ChartsSettings.lineChart.data} options={ChartsSettings.lineChart.options} />
              </div>
            </Box>
          </Col>
          <Col md={4}>
            <Box
              bodyClass='box-body big'
              title='Updates'
              titleClass='box border primary'
              {...this.props}
            >
              <Row>
                <Col sm={4}>
                  <Sparklines data={[1,3,2.8,4,3,3,4,3.4,5,7.5]} limit={11} width={60} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#03D0AB" }} />
                  </Sparklines>
                  <p className="center">500 Visitors</p>
                </Col>
                <Col sm={4}>
                  <Sparklines data={[4,2,2.1,3,2.7,2,4,4.2,3,2.1]} limit={11} width={60} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#A1DD03" }} />
                  </Sparklines>
                  <p className="center">150 Members</p>
                </Col>
                <Col sm={4}>
                  <Sparklines data={[1,4,5,8,4,7,2,3.4,5,8]} limit={11} width={60} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#F7464A" }} />
                  </Sparklines>
                  <p className="center">13% Bounce</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={12}>
                  <div className='chart'>
                    <Doughnut data={ChartsSettings.doughnutChart.data} options={ChartsSettings.doughnutChart.options} />
                  </div>
                  <p className="center">This month's profit</p>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <TasksWidget
              title='Tasks'
              titleClass='box border green'
              {...this.props}
            />
          </Col>
          <Col md={4}>
            <ChatWidget
              title='Chat'
              titleClass='box border red'
              {...this.props}
            />
          </Col>
          <Col md={4}>
            <Box
              bodyClass='box-body big'
              title='Stats'
              titleClass='box border blue'
              {...this.props}
            >
              <div className="sparkline-row">
                <span className="title">Profile views</span>
                <span className="value">354</span>
                <div className="linechart linechart-lg">
                  <Sparklines data={[1,3,2.8,4,3,3,4,3.4,5,7.5]} limit={11} width={70} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#03D0AB" }} />
                  </Sparklines>
                </div>
              </div>
              <div className="sparkline-row">
                <span className="title">Balance</span>
                <span className="value"><i className="fa fa-usd"></i>1,890</span>
                <span className="linechart linechart-lg">
                  <Sparklines data={[8, 53, 17, 36, 22, 33, 38, 49, 14, 47]} limit={11} width={70} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#A1DD03" }} />
                  </Sparklines>
                </span>
              </div>
              <div className="sparkline-row">
                <span className="title">This month's revenue</span>
                <span className="value"><i className="fa fa-usd"></i>5,225</span>
                <span className="linechart linechart-lg">
                  <Sparklines data={[5, 2, 7, 3, 2, 5, 7, 4, 5, 2]} limit={11} width={70} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#F7464A" }} />
                  </Sparklines>
                </span>
              </div>
            </Box>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <Box
              bodyClass='box-body'
              title='New users'
              titleClass='box border orange'
              {...this.props}
            >
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
            </Box>
          </Col>
          <Col md={7}>
            <Panel>
              <Row>
                <Col sm={3}>
                  <p className='center'>Downloads</p>
                  <div className='chart'>
                    <Pie data={ChartsSettings.pieChart1.data} options={ChartsSettings.pieChart1.options} />
                  </div>
                </Col>
                <Col sm={3}>
                  <p className='center'>Comments</p>
                  <div className='chart'>
                    <Pie data={ChartsSettings.pieChart2.data} options={ChartsSettings.pieChart2.options} />
                  </div>
                </Col>
                <Col sm={3}>
                  <p className='center'>This week</p>
                  <div className='chart'>
                    <Doughnut data={ChartsSettings.doughnutChart1.data} options={ChartsSettings.doughnutChart1.options} />
                  </div>
                </Col>
                <Col sm={3}>
                  <p className='center'>This month</p>
                  <div className='chart'>
                    <Doughnut data={ChartsSettings.doughnutChart2.data} options={ChartsSettings.doughnutChart2.options} />
                  </div>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }

}
