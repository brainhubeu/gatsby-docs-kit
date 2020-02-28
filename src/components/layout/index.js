/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import menuPagesPropTypes from '../../utils/menu-proptypes';
import { findMatchingPage } from '../../utils/navigation';
import Header from '../header/Header';
import SideNav from '../sideNav/SideNav';
import createSideMenu, { hasSideMenu } from '../../utils/sideMenu';
import Seo from '../seo';

import './index.scss';
import './codeBlock.scss';

const getPathName = (location, pathNamePrefix = '') => {
  let pathName = location.pathname;

  if (pathName === '/') {
    return pathName;
  }

  if (pathNamePrefix && pathNamePrefix.trim() && pathName.startsWith(pathNamePrefix)) {
    pathName = pathName.substring(pathNamePrefix.length, pathName.length);
  }

  if (pathName.substring(pathName.length-1) === '/') {
    pathName = pathName.substring(0, pathName.length-1);
  }

  return pathName;
};

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    data: PropTypes.shape({
      site: PropTypes.shape({
        pathPrefix: PropTypes.string,
        siteMetadata: PropTypes.shape({
          description: PropTypes.string,
          image: PropTypes.string,
          url: PropTypes.string,
          type: PropTypes.string,
          title: PropTypes.string,
          siteName: PropTypes.string,
          githubUrl: PropTypes.string,
        }),
      }),
      menu: PropTypes.shape({
        pages: menuPagesPropTypes,
      }).isRequired,
    }),
  };

  render() {
    const { children, data, location } = this.props;

    const pathName = getPathName(location, this.props.data.site.pathPrefix);

    const activeData = findMatchingPage(this.props.data.menu.pages, pathName);

    if (activeData && activeData.file && !hasSideMenu(activeData)) {
      activeData.sidemenu = createSideMenu(activeData, data);
    }

    return (
      <Fragment>
        <Seo siteMetadata={data.site.siteMetadata}/>
        <Header
          menuPages={data.menu.pages || []}
          activeNavTitle={activeData && activeData.title}
          githubUrl={data.site.siteMetadata.githubUrl}
        />
        {hasSideMenu(activeData) && <SideNav activeNavData={activeData} location={pathName+location.hash}/>}
        <div className="container">
          {children}
        </div>
      </Fragment>
    );
  }
}

const wrappedLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery{
        site {
          pathPrefix,
          siteMetadata {
            title
            description
            image
            url
            type
            siteName
            githubUrl
          }
        }
        
        allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
            headings {
              value
              depth
            }
          }
      }
    }
    
    menu {
      pages
    }
    
      }
    `}
    /* eslint-disable-next-line react/jsx-no-bind */
    render={data => <Layout data={data} {...props} />}
  />
);

export default wrappedLayout;

