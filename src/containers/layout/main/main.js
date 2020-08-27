import React from 'react';
import Features from '../../../components/features/features';
import Build from './build/build';
import head1 from '../../../images/bg-section-top-mobile-1.svg';
import foot1 from '../../../images/bg-section-bottom-mobile-1.svg';
import head2 from '../../../images/bg-section-top-mobile-2.svg';
import foot2 from '../../../images/bg-section-bottom-mobile-2.svg';
import img1 from '../../../images/illustration-grow-together.svg';
import img2 from '../../../images/illustration-flowing-conversation.svg';
import img3 from '../../../images/illustration-your-users.svg';
import headdes from '../../../images/bg-section-top-desktop-1.svg';
import footdes from '../../../images/bg-section-bottom-desktop-1.svg';
import headdes2 from '../../../images/bg-section-top-desktop-2.svg';
import footdes2 from '../../../images/bg-section-bottom-desktop-2.svg';

let headtop = head1;
let foottop = foot1;
let headbtm = head2;
let footbtm = foot2;

if (window.matchMedia('(min-width: 700px)').matches) {
  headtop = headdes;
  foottop = footdes;
  headbtm = headdes2;
  footbtm = footdes2;
} else {
  headtop = head1;
  foottop = foot1;
  headbtm = head2;
  footbtm = foot2;
}

const features = [
  {
    head: headtop,
    foot: foottop,
    h3: 'Grow Together',
    p: `Generate meaningful discussions with your audience and build a strong, loyal community. 
        Think of the insightful conversations you miss out on with a feedback form. `,
    img: img1,
    test: true
  },
  {
    h3: 'Flowing Conversations',
    p: `You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
        just-in-time loading for a more natural flow.`,
    img: img2,
    test: false
  },
  {
    head: headbtm,
    foot: footbtm,
    h3: 'Your Users',
    p: `It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
        once signed in to your app, your users can start chatting immediately.`,
    img: img3,
    test: true
  }
];

const main = () => (
  <main>
    {features.map((cur, i) => (
      <Features
        key={i}
        test={cur.test}
        head={cur.head}
        foot={cur.foot}
        img={cur.img}
        h3={cur.h3}
        p={cur.p}
      />
    ))}
    <Build />
  </main>
);

export default main;
