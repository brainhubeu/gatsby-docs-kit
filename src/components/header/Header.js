/* eslint-disable react/no-access-state-in-setstate, react/jsx-no-target-blank */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import menuPagesProptypes from '../../utils/menu-proptypes';

import GithubIcon from './GithubIcon';
import styles from './header.module.scss';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.listItemWith = 0;

    this.state = {
      mobileMenu: false,
      mainNavItemsWidth: 0,
      menuIsOpen: false,
    };
  }

  componentDidMount = () => {
    const listChildren = Array.from(this.listRef.current.children[0].children);
    this.listItemWidth = this.getItemListWidth(listChildren);

    this.setState({
      mobileMenu: this.listRef.current.clientWidth < this.listItemWidth,
    });

    window.addEventListener('resize', this.updateDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      mobileMenu: this.listRef.current.clientWidth < this.listItemWidth,
    });
  };

  getItemListWidth = navArray => {
    let navWidth = 0;

    navArray.forEach(element => {
      navWidth += element.clientWidth;
    });

    return navWidth;
  };

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };

  render() {
    const { menuPages, activeNavTitle, githubUrl } = this.props;
    return (
      <header
        className={classnames([
          styles.header,
          this.state.mobileMenu && styles['header--mobile'],
        ])}
      >
        <div className={styles.header__menuWrapper}>
          <nav className={styles.header__nav} ref={this.listRef}>
            <ul
              className={classnames([
                styles.nav__list,
                this.state.menuIsOpen && styles['nav__list--mobile__open'],
              ])}

            >
              {menuPages.map(( element, index ) => (
                <li key={index} className={styles.nav__item}>
                  <Link
                    to={element.url}
                    className={classnames([
                      styles.nav__link,
                      activeNavTitle === element.title ? styles[`nav__link--active`] : null,
                    ])}
                    data-after={element.title}
                    onClick={this.toggleMenu}
                  >
                    <span>{element.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.menu__btnsWrapper}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" className={styles.header__github}>
                <GithubIcon/>
              </a>
            )}
            {this.state.mobileMenu && (
              <button
                className={classnames([
                  styles.header__mobileBtn,
                  this.state.menuIsOpen && styles['header__mobileBtn--active'],
                ])}
                onClick={this.toggleMenu}
              >
                <span className={styles.mobileBtn__hamburger} />
              </button>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.string,
  activeNavTitle: PropTypes.string,
  menuPages: menuPagesProptypes,
  githubUrl: PropTypes.string,
};

export default Header;
