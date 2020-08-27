import React from 'react';
import styles from './button.module.scss';

const button = props => {
  const buttonStyle = [styles.button];

  switch (props.type) {
    case 'pinkLine':
      buttonStyle.push(styles.buttonPinkLine);
      break;
    default:
      buttonStyle.push(styles.buttonPink);
  }

  return (
    <button className={buttonStyle.join(' ')}>
      {props.children}
    </button>
  );
};

export default button;
