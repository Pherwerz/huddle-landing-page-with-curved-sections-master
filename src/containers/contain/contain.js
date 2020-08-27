import React from 'react';
import styles from './contain.module.scss';

const contain = props => (
  <div className={[styles.contain, props.extra].join(' ')}>
    {props.children}
  </div>
);

export default contain;
