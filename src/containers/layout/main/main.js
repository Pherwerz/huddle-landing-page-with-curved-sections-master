import React from 'react';
import Features from '../../../components/features/features';
import head1 from '../../../images/bg-section-top-mobile-1.svg';
import foot1 from '../../../images/bg-section-bottom-mobile-1.svg';
import head2 from '../../../images/bg-section-top-mobile-2.svg';
import foot2 from '../../../images/bg-section-bottom-mobile-2.svg';
import img1 from '../../../images/illustration-grow-together.svg';
import img2 from '../../../images/illustration-flowing-conversation.svg';
import img3 from '../../../images/illustration-your-users.svg';

const features = [
  {
    head: head1,
    foot: foot1,
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
    head: head2,
    foot: foot2,
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
        headtest={cur.test}
        foottest={cur.test}
        head={cur.head}
        foot={cur.foot}
        img={cur.img}
        h3={cur.h3}
        p={cur.p}
      />
    ))}
  </main>
);

export default main;
