import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Col, Row} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../../common/components/FooterTools.react';
import PageHeader from '../app/components/PageHeader.react';
import Box from '../app/components/Box.react';

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  }

  render() {
    const {msg: {widgets: msg}} = this.props;

    return (
      <div>
        <Helmet title={msg.title} />
        <Row>
          <PageHeader description={msg.description} title={msg.title} />
        </Row>
        <Row>

          <Col sm={4}>
            <Box bodyClass='box-body big'
                 icon='fa fa-bars'
                 title='Box 1'
                 titleClass='box'>
              {msg.dummyText}
            </Box>
          </Col>

          <Col sm={4}>
            <Box bodyClass='box-body big'
                 icon='fa fa-bars'
                 title='Box 2'
                 titleClass='box border'>
              {msg.dummyText}
            </Box>
          </Col>

          <Col sm={4}>
            <Box bodyClass='box-body big'
                 icon='fa fa-bars'
                 title='Box 3'
                 titleClass='box border orange'>
              {msg.dummyText}
            </Box>
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }

}
