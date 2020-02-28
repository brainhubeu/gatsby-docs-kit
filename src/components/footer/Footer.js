import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Maintained by <a href="https://brainhub.eu">Brainhub</a></p>
  </footer>
);

export default Footer;
