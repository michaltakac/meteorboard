import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import {Panel, Row, Col} from 'react-bootstrap';
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
    const {actions, msg: {uiElements: {typography: msg} }, ui} = this.props;

    return (
      <div>
        <Helmet title={'Meteorboard | ' + msg.title} />
        <Row>
          <PageHeader description={msg.description} title={msg.title} />
        </Row>
        <Row>
          <Col sm={12}>
            <Panel>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
              <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <pre>
                <code>
                  &lt;h1&gt;Heading 1&lt;/h1&gt;<br />
                  &lt;h2&gt;Heading 2&lt;/h2&gt;<br />
                  &lt;h3&gt;Heading 3&lt;/h3&gt;<br />
                  &lt;h4&gt;Heading 4&lt;/h4&gt;<br />
                  &lt;h5&gt;Heading 5&lt;/h5&gt;<br />
                  &lt;h6&gt;Heading 6&lt;/h6&gt;<br />
                  &lt;p class="lead"&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.&lt;/p&gt;
                </code>
              </pre>
              <hr />

              <h2>Example body text</h2>
              <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
              <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
              <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
              <pre>
                <code>
                  &lt;h2&gt;Example body text&lt;/h2&gt;<br />
                  &lt;p&gt;Nullam quis risus eget &lt;a href="#"&gt;urna mollis ornare&lt;/a&gt; vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.&lt;/p&gt;<br />
                  &lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;<br />
                  &lt;p&gt;The following snippet of text is &lt;strong&gt;rendered as bold text&lt;/strong&gt;.&lt;/p&gt;<br />
                  &lt;p&gt;The following snippet of text is &lt;em&gt;rendered as italicized text&lt;/em&gt;.&lt;/p&gt;<br />
                  &lt;p&gt;An abbreviation of the word attribute is &lt;abbr title="attribute"&gt;attr&lt;/abbr&gt;.&lt;/p&gt;
                </code>
              </pre>
              <hr />

              <h2>Emphasis classes</h2>
              <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
              <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
              <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <pre>
                <code>
                  &lt;h2&gt;Emphasis classes&lt;/h2&gt;<br />
                  &lt;p class="text-muted"&gt;Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.&lt;/p&gt;<br />
                  &lt;p class="text-primary"&gt;Nullam id dolor id nibh ultricies vehicula ut id elit.&lt;/p&gt;<br />
                  &lt;p class="text-warning"&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/p&gt;<br />
                  &lt;p class="text-danger"&gt;Donec ullamcorper nulla non metus auctor fringilla.&lt;/p&gt;<br />
                  &lt;p class="text-success"&gt;Duis mollis, est non commodo luctus, nisi erat porttitor ligula.&lt;/p&gt;<br />
                  &lt;p class="text-info"&gt;Maecenas sed diam eget risus varius blandit sit amet non magna.&lt;/p&gt;
                </code>
              </pre>
              <hr />

              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>

              <blockquote className="blockquote-reverse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>
              <pre>
                <code>
                  &lt;blockquote&gt;<br />
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;<br />
                    &lt;small&gt;Someone famous in &lt;cite title="Source Title"&gt;Source Title&lt;/cite&gt;&lt;/small&gt;<br />
                  &lt;/blockquote&gt;<br /><br />

                  &lt;blockquote class="blockquote-reverse"&gt;<br />
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;<br />
                    &lt;small&gt;Someone famous in &lt;cite title="Source Title"&gt;Source Title&lt;/cite&gt;&lt;/small&gt;<br />
                  &lt;/blockquote&gt;
                </code>
              </pre>
              <hr />
            </Panel>
          </Col>
        </Row>
        <FooterTools />
      </div>
    );
  }

}
