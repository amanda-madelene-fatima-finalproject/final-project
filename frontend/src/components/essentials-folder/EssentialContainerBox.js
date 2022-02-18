import React from 'react';
import EssentialBox from '../reusable-components/EssentialBox.js';

const EssentialContainerBox = () => {
  return (
    <>
      <EssentialBox
        header={
          'The rule you want to stick to for forming a new habit is the simpler, the better.'
        }
        quote={
          ' When you want to change behavior, jumping headlong into a major goal with both feet is often a waste of time. Instead, make tiny, incremental adjustments until they are part of your muscle memory. By starting small, you can attain big results. '
        }
        text={
          'This is where we come in, we will gently remind you to take one step at a time towards a smoother and happier day, every day.'
        }
      />
      <EssentialBox
        header={'Time In Nature'}
        quote={
          '“We often forget that we are nature. Nature is not something separate from us. So when we say that we have lost our connection to nature, we’ve lost our connection to ourselves.” ~ Andy Goldsworthy'
        }
        text={
          'Nature is not only nice to have, but it’s a have-to-have for physical health and cognitive functioning. Studies have shown that time in nature — as long as people feel safe — is an antidote for stress: It can lower blood pressure and stress hormone levels, reduce nervous system arousal, enhance immune system function, increase self-esteem, reduce anxiety, and improve mood.'
        }
      />
      <EssentialBox
        header={'Movement'}
        quote={
          '"Movement is life. Life is a process. Improve the quality of the process and you improve the quality of life itself." ~ Moshe Feldenkrais'
        }
        text={
          "Another word for exercise is simply movement, and because it is one of your body's most basic functions moving should never be burdensome. However the word exercise or working out can be a negative one for many of us. Moving your body is healthy, and should feel good—however you do it. Here are some great reasons to get moving; Enhanced Mood, Healthier Bones, Encanced Brain Health"
        }
      />
      <EssentialBox
        header={'Staying Hydrated'}
        quote={'"I will just have water thanks!"'}
        text={
          'Water keeps every system in the body functioning properly and has many important jobs. Staying hydrated is a daily necessity, unfortunately, many of us are not getting enough to drink. A general rule of thumb is to drink 8 glasses of water a day.'
        }
      />
      <EssentialBox
        header={'Prioritizing Sleep'}
        quote={
          '“I love sleep. My life has the tendency to fall apart when I am awake, you know?” ~ Ernest Hemingway'
        }
        text={
          'Sleep plays a vital role in good health and well-being throughout your life. Getting enough quality sleep at the right times can help protect your mental health, physical health, quality of life, and safety. The damage from sleep deficiency can occur in an instant (such as a car crash), or it can harm you over time. For example, ongoing sleep deficiency can raise your risk for some chronic health problems. It also can affect how well you think, react, work, learn, and get along with others.'
        }
      />
      <EssentialBox
        header={'Taking Breaks'}
        quote={
          '“Almost everything will work again if you unplug it for a few minutes... including you.” ~ Annie Lamott'
        }
        text={
          'When working on a complex problem or when you feel that you have too much to do, it is easy to convince yourself that you do not have the time to take breaks. However, research has found that taking a break can be very beneficial for you and your work.  Micro-breaks, lunchtime breaks and longer breaks, have all been shown to have a positive relationship with wellbeing and productivity. By taking regular breaks you can boost your performance.'
        }
      />
    </>
  );
};

export default EssentialContainerBox;
