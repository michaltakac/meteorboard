import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Accordion, Alert, Button, Col, Label, Panel, ProgressBar, Row} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../../common/components/FooterTools.react';
import PageHeader from '../components/PageHeader.react';
import Box from '../components/Box.react';

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object,
    ui: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      alertVisible: true
    };
  }

  render() {
    const {actions, msg: {widgets: msg}, ui} = this.props;

    return (
      <div>
        <Helmet title={msg.title} />
        <Row>
          <PageHeader description={msg.description} title={msg.title} />
        </Row>

        <Row>

          <Col sm={4}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Box 1'
              titleClass='box'
              ui={ui}
            >
              {msg.dummyText}
            </Box>
          </Col>

          <Col sm={4}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Box 2'
              titleClass='box border'
              ui={ui}
            >
              {msg.dummyText}
            </Box>
          </Col>

          <Col sm={4}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Box 3'
              titleClass='box border orange'
              ui={ui}
            >
              {msg.dummyText}
            </Box>
          </Col>
        </Row>

        <Row>
          <Col sm={5}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Labels'
              titleClass='box border green'
              ui={ui}
            >
              <Label bsStyle='default'>Default</Label>&nbsp;
              <Label bsStyle='primary'>Primary</Label>&nbsp;
              <Label bsStyle='success'>Success</Label>&nbsp;
              <Label bsStyle='info'>Info</Label>&nbsp;<br />
              <Label bsStyle='warning'>Warning</Label>&nbsp;
              <Label bsStyle='danger'>Danger</Label>
            </Box>
          </Col>

          <Col sm={7}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Collapsing accordion'
              titleClass='box border pink'
              ui={ui}
            >
              <Accordion>
                <Panel header='Collapsible Group Item #1' eventKey='1'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </Panel>
                <Panel header='Collapsible Group Item #2' eventKey='2'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </Panel>
                <Panel header='Collapsible Group Item #3' eventKey='3'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </Panel>
              </Accordion>
            </Box>
          </Col>
        </Row>

        <Row>
          <Col sm={5}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Progress bars'
              titleClass='box border primary'
              ui={ui}
            >
              <div>
                <ProgressBar now={60} />
                <ProgressBar now={60} label="%(percent)s%" />
                <ProgressBar bsStyle="success" now={40} />
                <ProgressBar bsStyle="info" now={20} />
                <ProgressBar bsStyle="warning" now={60} />
                <ProgressBar bsStyle="danger" now={80} />
                <ProgressBar striped bsStyle="success" now={40} />
                <ProgressBar striped bsStyle="info" now={20} />
                <ProgressBar striped bsStyle="warning" now={60} />
                <ProgressBar striped bsStyle="danger" now={80} />
                <ProgressBar active now={45} />
                <ProgressBar>
                  <ProgressBar striped bsStyle="success" now={35} key={1} />
                  <ProgressBar bsStyle="warning" now={20} key={2} />
                  <ProgressBar active bsStyle="danger" now={10} key={3} />
                </ProgressBar>
              </div>
            </Box>
          </Col>

          <Col sm={7}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Alerts'
              titleClass='box border red'
              ui={ui}
            >
              <Alert bsStyle='warning'>
                <strong>Warning!</strong> This is a warning message.
              </Alert>
              {this.getAlert()}
            </Box>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Box
              actions={actions}
              bodyClass='box-body big'
              title='Panels with headers'
              titleClass='box border'
              ui={ui}
            >
              <Panel header='Panel title'>
                Panel content
              </Panel>

              <Panel header='Panel title' bsStyle='primary'>
                Panel content
              </Panel>

              <Panel header='Panel title' bsStyle='success'>
                Panel content
              </Panel>

              <Panel header='Panel title' bsStyle='info'>
                Panel content
              </Panel>

              <Panel header='Panel title' bsStyle='warning'>
                Panel content
              </Panel>

              <Panel header='Panel title' bsStyle='danger'>
                Panel content
              </Panel>
            </Box>
          </Col>
        </Row>

        <FooterTools />
      </div>
    );
  }

  getAlert() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle='danger' onDismiss={this.handleAlertDismiss.bind(this)}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>
            <Button bsStyle='danger'>Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss.bind(this)}>Hide Alert</Button>
          </p>
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow.bind(this)}>Show Alert</Button>
    );
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

}
