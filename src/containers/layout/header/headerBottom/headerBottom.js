import React from 'react';
import Contain from '../../../contain/contain';
import Button from '../../../../components/button/button';
import styles from './headerBottom.module.scss';
import image from '../../../../images/screen-mockups.svg';
import comm from '../../../../images/icon-communities.svg';
import msg from '../../../../images/icon-messages.svg';

const btm = [
  {
    icon: comm,
    head: '1.4k+',
    para: 'Communities Formed'
  },
  {
    icon: msg,
    head: '2.7m+',
    para: 'Messages Sent'
  }
];

const headerBottom = () => (
  <div>
    <Contain>
      <div className={styles.headerBottomTop}>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities.
          You have a voice, but so does your audience.
          Create connections with your users as you engage
          in genuine discussion.
        </p>

        <Button>Get Started For Free</Button>
      </div>

      <div className={styles.headerBottomMid}>
        <img src={image} alt="mockup" />
      </div>

      <div className={styles.headerBottomBtm}>
        {btm.map((cur, i) => (
          <div key={i} className={styles.headerBottomBtmEl}>
            <img src={cur.icon} alt={cur.head} />
            <h2>{cur.head}</h2>
            <p>{cur.para}</p>
          </div>
        ))}
      </div>
    </Contain>
  </div>
);

export default headerBottom;
