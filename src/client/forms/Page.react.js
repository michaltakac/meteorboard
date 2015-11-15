import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import {ButtonInput, Input, Row} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../../common/components/FooterTools.react';
import PageHeader from '../app/components/PageHeader.react';
import Box from '../app/components/Box.react';
//import Form from '../app/components/Form.react';
import {FormattedHTMLMessage} from 'react-intl';
//import {Link} from 'react-router';

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  }

  render() {
    const {msg: {widgets: msg}} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div>
          <Row>
            <PageHeader />
          </Row>

          <Row>
            <Box bodyClass='box-body big'
                 gridWidth={6}
                 icon='fa fa-bars'
                 title='Basic form elements'
                 titleClass='box border orange'>
              {/* Basic form example */}
              <h3 className="form-title">Basic Example</h3>
              <form role="form">
                <div className="form-group">
                  <Input className="form-control" label="Email address" placeholder="Enter email" type="email" />
                </div>
                <div className="form-group">
                  <Input className="form-control" label="Password" placeholder="Password" type="password" />
                </div>
                <div className="checkbox">
                  <Input type="checkbox" label="Check me out" />
                </div>
                <ButtonInput className="btn btn-success" type="submit" value="Submit" />
              </form>

              <div className="separator"></div>

              {/* Inline form example */}
              <h3 className="form-title">Inline form</h3>
              <form className="form-inline" role="form">
                <div className="form-group">
                  <Input className="form-control" placeholder="Enter email" type="email" />
                </div>
                <div className="form-group">
                  <Input className="form-control" placeholder="Password" type="password" />
                </div>
                <ButtonInput className="btn btn-inverse" type="submit" value="Sign in" />
              </form>

              <div className="separator"></div>

              {/* Horizontal form example */}
              <h3 className="form-title">Horizontal form</h3>
              <form className="form-horizontal" role="form">
                <Input className="form-control"
                       label="Email"
                       labelClassName="col-sm-2 control-label"
                       placeholder="Email"
                       type="email"
                       wrapperClassName="col-sm-10" />
                <Input className="form-control"
                       label="Password"
                       labelClassName="col-sm-2 control-label"
                       placeholder="Password"
                       type="password"
                       wrapperClassName="col-sm-10" />
                <Input help="Offset is applied to wrapper."
                       label="Remember me"
                       type="checkbox"
                       wrapperClassName="col-sm-offset-2 col-sm-10" />
                <ButtonInput className="btn btn-pink"
                             type="submit"
                             value="Sign in"
                             wrapperClassName="col-sm-offset-2 col-sm-10" />
              </form>
            </Box>

            <Box bodyClass='box-body big'
                 gridWidth={6}
                 icon='fa fa-bars'
                 title='Form controls'
                 titleClass='box border purple'>

            </Box>

            <Box bodyClass='box-body big'
                 gridWidth={6}
                 icon='fa fa-bars'
                 title='Form states'
                 titleClass='box border orange'>

            </Box>
          </Row>
          <FooterTools />
        </div>
      </DocumentTitle>
    );
  }

}
