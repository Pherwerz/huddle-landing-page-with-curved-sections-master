import React from 'react';
import styles from './features.module.scss';
import Contain from '../../containers/contain/contain';

const features = props => (
  <section className={styles.features}>
    {props.headtest ? (
      <img src={props.head} alt="head" />
    ) : null}
    <Contain extra={styles.featuresBody}>
      <div className={styles.featuresLeft}>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
      <div className={styles.featuresRight}>
        <img src={props.img} alt="img" />
      </div>
    </Contain>
    {props.foottest ? (
      <img src={props.foot} alt="foot" />
    ) : null}
  </section>
);

export default features;
