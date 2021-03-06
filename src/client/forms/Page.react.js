import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Col, ButtonInput, Input, OverlayTrigger, Row, Tooltip} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import FooterTools from '../components/FooterTools.react';
import PageHeader from '../components/PageHeader.react';
import Box from '../components/Box.react';
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
    const {actions, msg: {forms: msg}, ui} = this.props;

    const tooltipFocus = <Tooltip>Tooltip on focus.</Tooltip>;
    const tooltipHover = <Tooltip>Tooltip on hover.</Tooltip>;

    return (
      <div>
        <Helmet title={msg.title} />
        <Row>
          <PageHeader description={msg.description} title={msg.title} />
        </Row>

        <Row>
          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Basic form elements'
              titleClass='box border primary'
              {...this.props}
            >
              {/* Basic form example */}
              <h3 className='form-title'>Basic form</h3>
              <form role='form'>
                <Input label='Email address' placeholder='Enter email' type='email' />
                <Input label='Password' placeholder='Password' type='password' />
                <Input help='Help text (optional)' label='Checkbox' type='checkbox' />
                <ButtonInput className='btn btn-success' type='submit' value='Submit' />
              </form>

              <div className='separator'></div>

              {/* Horizontal form example */}
              <h3 className='form-title'>Horizontal form</h3>
              <form className='form-horizontal' role='form'>
                <Input
                  label='Email'
                  labelClassName='col-sm-2 control-label'
                  placeholder='Email'
                  type='email'
                  wrapperClassName='col-sm-10'
                />
                <Input
                  label='Password'
                  labelClassName='col-sm-2 control-label'
                  placeholder='Password'
                  type='password'
                  wrapperClassName='col-sm-10'
                />
                <Input
                  help='Help text (optional)'
                  label='Checkbox'
                  type='checkbox'
                  wrapperClassName='col-sm-offset-2 col-sm-10'
                />
                <ButtonInput
                  className='btn btn-success'
                  type='submit'
                  value='Sign in'
                  wrapperClassName='col-sm-offset-2 col-sm-10'
                />
              </form>
            </Box>

            <Box
              bodyClass='box-body big'
              title='Inline form'
              titleClass='box border primary'
              {...this.props}
            >
              <form className='form-inline' role='form'>
                <Input placeholder='Enter email' type='email' />
                <Input placeholder='Password' type='password' />
                <ButtonInput className='btn btn-success' type='submit' value='Sign in' />
              </form>
            </Box>
          </Col>

          <Col sm={6}>
            <Box
              bodyClass='box-body big'
              title='Form states'
              titleClass='box border primary'
              {...this.props}
            >
              <form className='form-horizontal' role='form'>
                <Input
                  label='Input focus'
                  labelClassName='col-sm-3 control-label'
                  placeholder='This is focused...'
                  type='text'
                  wrapperClassName='col-sm-9'
                />
                <Input
                  disabled
                  label='Disabled inputs'
                  labelClassName='col-sm-3 control-label'
                  placeholder='Disabled input here...'
                  type='text'
                  wrapperClassName='col-sm-9'
                />
                <OverlayTrigger overlay={tooltipFocus} placement='top' trigger='click'>
                  <Input
                    label='Field with tooltip on focus'
                    labelClassName='col-sm-3 control-label'
                    type='text'
                    wrapperClassName='col-sm-9'
                  />
                </OverlayTrigger>
                <OverlayTrigger overlay={tooltipHover} placement='top'>
                  <Input
                    label='Field with tooltip on hover'
                    labelClassName='col-sm-3 control-label'
                    type='text'
                    wrapperClassName='col-sm-9'
                  />
                </OverlayTrigger>
                <Input
                  bsStyle='success'
                  hasFeedback
                  label='Input with success'
                  labelClassName='col-sm-3 control-label'
                  type='text'
                  wrapperClassName='col-sm-9'
                />
                <Input
                  bsStyle='warning'
                  hasFeedback
                  label='Input with warning'
                  labelClassName='col-sm-3 control-label'
                  type='text'
                  wrapperClassName='col-sm-9'
                />
                <Input
                  bsStyle='error'
                  hasFeedback
                  label='Input with error'
                  labelClassName='col-sm-3 control-label'
                  type='text'
                  wrapperClassName='col-sm-9'
                />
              </form>
            </Box>

            <Box
              bodyClass='box-body big'
              title='Various inputs'
              titleClass='box border primary'
              {...this.props}
            >
              {/* Inline form example */}
              <form className='form-horizontal' role='form'>
                <Input
                  label='Inputs'
                  labelClassName='col-sm-3 control-label'
                  placeholder='Text input'
                  type='text'
                  wrapperClassName='col-sm-9'
                />
                <Input
                  label='Textarea'
                  labelClassName='col-sm-3 control-label'
                  type='textarea'
                  wrapperClassName='col-sm-9'
                />
                <Input label='Inline checkboxes' labelClassName='col-sm-3 control-label' wrapperClassName='col-sm-9'>
                  <Row>
                    <Col className='col-xs-offset-1' xs={2}>
                      <Input
                        label='1'
                        labelClassName='checkbox-inline'
                        type='checkbox'
                      />
                    </Col>
                    <Col xs={2}>
                      <Input
                        label='2'
                        labelClassName='checkbox-inline'
                        type='checkbox'
                      />
                    </Col>
                    <Col xs={2}>
                      <Input
                        label='3'
                        labelClassName='checkbox-inline'
                        type='checkbox'
                      />
                    </Col>
                  </Row>
                </Input>
                <Input
                  label='Select'
                  labelClassName='col-sm-3 control-label'
                  placeholder='select'
                  type='select'
                  wrapperClassName='col-sm-9'
                >
                  <option value='select'>select</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Input>
                <Input
                  label='Multiple Select'
                  labelClassName='col-sm-3 control-label'
                  multiple
                  type='select'
                  wrapperClassName='col-sm-9'
                >
                  <option value='select'>select (multiple)</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Input>
              </form>
            </Box>
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }

}
