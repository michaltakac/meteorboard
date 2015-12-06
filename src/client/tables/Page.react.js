import Box from '../components/Box.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Row, Col, Table} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../components/FooterTools.react';
import PageHeader from '../components/PageHeader.react';

export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, msg: {tables: msg}, ui} = this.props;

    return (
      <div>
        <Helmet title={msg.title} />
        <Row>
          <PageHeader description={msg.description} title={msg.title} />
        </Row>

        <Row>
          <Col md={6}>
            <Box
              bodyClass='box-body'
              title='Simple'
              titleClass='box border primary'
              {...this.props}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Column name</th>
                    <th>Column name</th>
                    <th>Column name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Col>
          <Col md={6}>
            <Box
              bodyClass='box-body'
              title='Striped'
              titleClass='box border primary'
              {...this.props}
            >
              <Table striped>
                <thead>
                  <tr>
                    <th>Column name</th>
                    <th>Column name</th>
                    <th>Column name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Box
              bodyClass='box-body'
              title='Bordered, hover'
              titleClass='box border primary'
              {...this.props}
            >
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Column name</th>
                    <th>Column name</th>
                    <th>Column name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Col>
          <Col md={6}>
            <Box
              bodyClass='box-body'
              title='Bordered, hover, striped'
              titleClass='box border primary'
              {...this.props}
            >
              <Table bordered hover striped>
                <thead>
                  <tr>
                    <th>Column name</th>
                    <th>Column name</th>
                    <th>Column name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Box
              bodyClass='box-body'
              title='Condensed'
              titleClass='box border primary'
              {...this.props}
            >
              <Table bordered condensed hover striped>
                <thead>
                  <tr>
                    <th>Column name</th>
                    <th>Column name</th>
                    <th>Column name</th>
                    <th>Column name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                  <tr>
                    <td>Something 1</td>
                    <td>Something 2</td>
                    <td>Something 3</td>
                    <td>Something 4</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }
}
