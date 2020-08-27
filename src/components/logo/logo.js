import React from 'react';
import styles from './logo.module.scss';
import logo1 from '../../images/logo.svg';
import logo2 from '../../images/logo2.svg';

const logo = props => {
  let icon;

  if (props.type === 'light') {
    icon = logo2;
  } else if (props.type === 'dark') {
    icon = logo1;
  }

  return (
    <div className={styles.logo}>
      <img src={icon} alt="logo" />
    </div>
  );
};

export default logo;
