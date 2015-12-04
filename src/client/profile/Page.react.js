import Box from '../components/Box.react';
import Component from 'react-pure-render/component';
import Divider from '../components/Divider.react';
import ChartsSettings from './charts';
import Helmet from 'react-helmet';
import {Row, Col, ButtonInput, Input, Panel, Table, Tab, Tabs} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../../common/components/FooterTools.react';
import {Link} from 'react-router';
import {Bar, Doughnut, Pie} from 'rc-chartjs';
import {Sparklines, SparklinesBars} from 'react-sparklines';

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, msg: {profile: msg}, ui} = this.props;

    return (
      <div>
        <Helmet title={msg.title} />

        <Divider height={20} />

        <Row>
          <Col sm={6}>
            <Panel>
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Personal info">
                  <h2>John Doe</h2>
                  <p>
                    <i className="fa fa-map-marker"></i>
                    Slovakia, Europe
                  </p>
                  <p>
                    <i className="fa fa-phone"></i>
                    +421 912 345 678
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>
                    <Link to="#">hello@example.com</Link>
                  </p>
                  <p>
                    <i className="fa fa-skype"></i>
                    <Link to="#">username123</Link>
                  </p>
                  <p>
                    <i className="fa fa-twitter"></i>
                    <Link to="#">@username123</Link>
                  </p>
                  <p>
                    <i className="fa fa-rocket"></i>
                    <Link to="#">www.example.com</Link></p>
                  <h3>Bio</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In rhoncus augue in ex varius, et condimentum purus rhoncus.
                  Aenean scelerisque vestibulum sodales. Sed scelerisque ante
                  vel nibh feugiat, at molestie est luctus. Etiam dignissim
                  lacinia ipsum, vitae iaculis lorem finibus id.</p>
                </Tab>
                <Tab eventKey={2} title="Edit">
                  <Divider height={20} />
                  <form className='form-horizontal' role='form'>
                    <Input
                      label='Full name'
                      labelClassName='col-sm-3 control-label'
                      type='text'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Location'
                      labelClassName='col-sm-3 control-label'
                      type='text'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Phone number'
                      labelClassName='col-sm-3 control-label'
                      type='number'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Email'
                      labelClassName='col-sm-3 control-label'
                      type='email'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Skype'
                      labelClassName='col-sm-3 control-label'
                      type='text'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Twitter'
                      labelClassName='col-sm-3 control-label'
                      type='text'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Website'
                      labelClassName='col-sm-3 control-label'
                      type='text'
                      wrapperClassName='col-sm-9'
                    />
                    <Input
                      label='Bio'
                      labelClassName='col-sm-3 control-label'
                      type='textarea'
                      wrapperClassName='col-sm-9'
                    />
                    <ButtonInput
                      className='btn btn-success'
                      type='submit'
                      value='Sign in'
                      wrapperClassName='col-sm-offset-3 col-sm-9'
                    />
                  </form>
                </Tab>
              </Tabs>
            </Panel>
          </Col>

          <Col md={6}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Stats'
              titleClass='box border primary'
              ui={ui}
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
                  <Sparklines data={[5, 2, 7, 3, 0, 5, 7, 4, 5, 2]} limit={11} width={70} height={30} margin={0}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#F7464A" }} />
                  </Sparklines>
                </span>
              </div>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
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
