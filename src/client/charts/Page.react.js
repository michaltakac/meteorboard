import Box from '../components/Box.react';
import ChartsSettings from './charts';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Row, Col} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../components/FooterTools.react';
import PageHeader from '../components/PageHeader.react';
import {Bar, Doughnut, Line, Radar, PolarArea, Pie} from 'rc-chartjs';

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, msg: {charts: msg}, ui} = this.props;

    return (
      <div>
        <Helmet title={'Meteorboard | ' + msg.title} />
        <Row>
          <PageHeader description={msg.description} title={msg.title} />
        </Row>
        <Row>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Line chart'
              titleClass='box border'
              {...this.props}
            >
              <div className='chart'>
                <Line data={ChartsSettings.lineChart.data} options={ChartsSettings.lineChart.options} />
              </div>
            </Box>
          </Col>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Bar chart'
              titleClass='box border'
              {...this.props}
            >
              <div className='chart'>
                <Bar data={ChartsSettings.barChart.data} options={ChartsSettings.barChart.options} />
              </div>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Radar chart'
              titleClass='box border'
              {...this.props}
            >
              <div className='chart'>
                <Radar data={ChartsSettings.radarChart.data} options={ChartsSettings.radarChart.options} />
              </div>
            </Box>
          </Col>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Polar area chart'
              titleClass='box border'
              {...this.props}
            >
              <div className='chart'>
                <PolarArea data={ChartsSettings.polarAreaChart.data} options={ChartsSettings.polarAreaChart.options} />
              </div>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Pie chart'
              titleClass='box border'
              {...this.props}
            >
              <div className='chart'>
                <Pie data={ChartsSettings.pieChart.data} options={ChartsSettings.pieChart.options} />
              </div>
            </Box>
          </Col>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Doughnut chart'
              titleClass='box border'
              {...this.props}
            >
              <div className='chart'>
                <Doughnut data={ChartsSettings.doughnutChart.data} options={ChartsSettings.doughnutChart.options} />
              </div>
            </Box>
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }

}
