import React, { Fragment } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

const { Scope } = require('../globalReferences');

export default class Template extends React.Component {
  componentDidMount() {
    Array.prototype.forEach.call(
      this.wrapper.getElementsByClassName('gatsby-render-code'),
      renderAnchor => {
        const code = renderAnchor.parentElement.getElementsByClassName('gatsby-render-source-code')[0].innerHTML || '';

        const unescapedCode = _.unescape(code).trim();

        const jsx = (
          <LiveProvider mountStylesheet={false} code={unescapedCode} scope={Scope}>
            <div className="livePreviewWithError">
              <LivePreview />
              <LiveError />
            </div>
            <LiveEditor/>
          </LiveProvider>
        );
        ReactDOM.render(jsx, renderAnchor);
      },
    );
  }

  setRef = ref => this.wrapper = ref;


  render() {
    return (
      <Fragment>
        <Main>
          <div className="docs-post-container">
            <div className="docs-post">
              <div
                ref={this.setRef}
                className="docs-post-content"
              />
            </div>
          </div>
        </Main>
        <Footer/>
      </Fragment>
    );
  }
}

export const pageQuery = `
  query DocsPostByPath($relativePath: String!) {
    markdownRemark(fields: { relativePath: { eq: $relativePath } }) {
      html
    }
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};
