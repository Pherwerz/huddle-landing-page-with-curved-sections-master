import React, { Fragment } from 'react';
import foothead from '../../../images/bg-footer-top-mobile.svg';
import footheaddes from '../../../images/bg-footer-top-desktop.svg';
import styles from './footer.module.scss';
import Contain from '../../contain/contain';
import Button from '../../../components/button/button';
import Logo from '../../../components/logo/logo';
import phone from '../../../images/icon-phone.svg';
import email from '../../../images/icon-email.svg';
import social from '../../../images/social.svg';

let foot = foothead;

if (window.matchMedia('(min-width: 700px)').matches) {
  foot = footheaddes;
} else {
  foot = foothead;
}

const contact = [
  {
    icon: phone,
    text: 'Phone: +1-543-123-4567'
  },
  {
    icon: email,
    text: 'example@huddle.com'
  }
];

const icons = ['facebook2', 'instagram', 'twitter'];

const footer = () => {
  return (
    <Fragment>
      <img
        src={foot}
        alt="footer img"
        className={styles.footerImg}
      />
      <footer className={styles.footer}>
        <Contain extra={styles.footerBody}>
          <div className={styles.footerLeft}>
            <h2>Newsletter</h2>
            <p>
              To recieve tips on how to grow your community,
              sign up to our weekly newsletter. We’ll never
              send you spam or pass on your email address
            </p>
            <form>
              <input type="text" />
              <Button>Subscribe</Button>
            </form>
          </div>
          <div className={styles.footerRight}>
            <Logo type="light" />

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris nulla quam, hendrerit
              lacinia vestibulum a, ultrices quis sem.
            </p>

            {contact.map((cur, i) => (
              <div className={styles.footerContact} key={i}>
                <img src={cur.icon} alt={i} />
                <span>{cur.text}</span>
              </div>
            ))}

            <div className={styles.footerSocial}>
              {icons.map((cur, i) => (
                <svg key={i}>
                  <use
                    xlinkHref={`${social}#icon-${cur}`}
                  />
                </svg>
              ))}
            </div>
          </div>
        </Contain>

        <p className={styles.attribution}>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://pherwerz.github.io">
            Adebayo Fawaz
          </a>
          .
        </p>
      </footer>
    </Fragment>
  );
};

export default footer;
