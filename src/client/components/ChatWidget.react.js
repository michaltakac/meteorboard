import Component from 'react-pure-render/component';
import Divider from './Divider.react';
import React, {PropTypes} from 'react';
import {Button, Col, Image, Input} from 'react-bootstrap';
import {Link} from 'react-router';

export default class ChatWidget extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    titleClass: PropTypes.string.isRequired,
    ui: PropTypes.object.isRequired
  }

  render() {
    const {actions, icon, title, titleClass, ui} = this.props;
    const sendButton = <Button className="btn btn-primary" type="button">Send</Button>;
    const titleIcon = icon ? <i className={icon}></i> : '';

    return (
      <div className={titleClass}>
        <div className="box-title">
          <h4>{titleIcon}{title}</h4>
        </div>
        <div className="box-chat">
          <div className="scroller" style={{height: '320px'}}>
            <ul className="media-list chat-list">
              <li className="media">
                <Link className="pull-left" to="#">
                  <Image className="media-object" alt="Generic placeholder image" src="img/avatars/avatar1.jpg" />
                </Link>
                <div className="media-body chat-pop">
                <h4 className="media-heading">John Doe <span className="pull-right"><span className="timeago" title="Oct 9, 2013" >Oct 9, 2013</span> </span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
              </li>
              <li className="media">
                <Link className="pull-right" to="#">
                  <Image className="media-object"  alt="Generic placeholder image" src="img/profile/twitter-avatar.png" />
                </Link>
                <div className="pull-right media-body chat-pop mod">
                <h4 className="media-heading">You <span className="pull-left"><span className="timeago" title="Oct 10, 2013" >Oct 10, 2013</span></span></h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </li>
              <li className="media">
                <Link className="pull-left" to="#">
                  <Image className="media-object"  alt="Generic placeholder image" src="img/avatars/avatar3.jpg" />
                </Link>
                <div className="media-body chat-pop">
                <h4 className="media-heading">Roland O'Brian <span className="pull-right"><span className="timeago" title="Oct 10, 2013" >Oct 10, 2013</span> </span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li className="media">
                <Link className="pull-left" to="#">
                  <Image className="media-object"  alt="Generic placeholder image" src="img/avatars/avatar4.jpg" />
                </Link>
                <div className="media-body chat-pop">
                <h4 className="media-heading">Jeremy Ryan <span className="pull-right"><span className="timeago" title="Oct 10, 2013" >Oct 10, 2013</span> </span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li className="media">
                <Link className="pull-right" to="#">
                  <Image className="media-object"  alt="Generic placeholder image" src="img/profile/twitter-avatar.png" />
                </Link>
                <div className="pull-right media-body chat-pop mod">
                <h4 className="media-heading">You <span className="pull-left"><span className="timeago" title="Oct 11, 2013" >Oct 11, 2013</span></span></h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </li>
              <li className="media">
                <Link className="pull-left" to="#">
                  <Image className="media-object"  alt="Generic placeholder image" src="img/avatars/avatar1.jpg" />
                </Link>
                <div className="media-body chat-pop">
                <h4 className="media-heading">John Doe <span className="pull-right"><span className="timeago" title="Oct 12, 2013" >Oct 12, 2013</span> </span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li className="media">
                <Link className="pull-right" to="#">
                  <Image className="media-object"  alt="Generic placeholder image" src="img/profile/twitter-avatar.png" />
                </Link>
                <div className="pull-right media-body chat-pop mod">
                <h4 className="media-heading">You <span className="pull-left"><span className="timeago" title="Oct 12, 2013" >Oct 12, 2013</span></span></h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </li>
            </ul>
          </div>

          <Divider height={2} />

          <div className="chat-form">
            <Input
              buttonAfter={sendButton}
              className="form-control"
              placeholder="Enter message"
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}
