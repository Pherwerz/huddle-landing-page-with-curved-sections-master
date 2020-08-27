import React from 'react';
import styles from './headerNav.module.scss';
import Contain from '../../../contain/contain';
import Logo from '../../../../components/logo/logo';
import Button from '../../../../components/button/button';

const headerNav = () => {
  return (
    <div className={styles.headerNav}>
      <Contain extra={styles.headerNavextra}>
        <Logo type="dark" />
        <Button type="pinkLine">Try it free</Button>
      </Contain>
    </div>
  );
};

export default headerNav;
