import React from 'react';
import AdCopy from '../reusable-components/AdCopy.js';
import { useSelector } from 'react-redux';

const AdCopyProfile = () => {
  const name = useSelector((store) => store.user.name);
  return (
    <>
      <AdCopy text={`Hey there ${name}! Let’s see how you’ve been doing.`} />
    </>
  );
};

export default AdCopyProfile;
