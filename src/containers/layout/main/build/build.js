import React from 'react';
import Button from '../../../../components/button/button';
import Contain from '../../../contain/contain';
import styles from './build.module.scss';

const build = () => (
  <section className={styles.build}>
    <Contain extra={styles.buildBody}>
      <h2>Ready To Build Your Community?</h2>
      <Button>Get Started For Free</Button>
    </Contain>
  </section>
);

export default build;
