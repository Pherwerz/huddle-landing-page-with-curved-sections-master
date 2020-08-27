import React from 'react';
import styles from './features.module.scss';
import Contain from '../../containers/contain/contain';

const features = props => {
  return (
    <section className={styles.features}>
      {props.test ? (
        <img src={props.head} alt="head" />
      ) : null}
      <div
        className={props.test ? styles.featuresTest : null}
      >
        <Contain
          extra={[
            styles.featuresBody,
            props.test ? null : styles.featuresBodyRev
          ].join(' ')}
        >
          <div className={styles.featuresRight}>
            <img src={props.img} alt="img" />
          </div>
          <div className={styles.featuresLeft}>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
          </div>
        </Contain>
      </div>
      {props.test ? (
        <img src={props.foot} alt="foot" />
      ) : null}
    </section>
  );
};

export default features;
